import re
import requests
from config import HEADERS

def is_valid_url(url):
    pattern = re.compile(r'https?://\S+')
    return bool(pattern.match(url))

def check_url_reachable(url):
    try:
        response = requests.get(url, headers=HEADERS, timeout=5)
        return response.status_code == 200
    except requests.RequestException:
        return False

def get_input_urls():
    urls = []
    print("Enter company URLs (one per line). Type 'done' when finished:")
    while True:
        url = input("URL: ").strip()
        if url.lower() == 'done':
            break
        if not is_valid_url(url):
            print("❌ Invalid URL format. Must start with http:// or https://")
            continue
        if not check_url_reachable(url):
            print("❌ URL not reachable or response failed.")
            continue
        urls.append(url)
    return urls
