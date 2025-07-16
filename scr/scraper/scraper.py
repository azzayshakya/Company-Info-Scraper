import os
import requests
from bs4 import BeautifulSoup
from config import HEADERS
from scraper.utils import (
    extract_emails,
    extract_phone_numbers,
    extract_social_links,
    detect_technologies
)
import logging

os.makedirs("logs", exist_ok=True)
logging.basicConfig(filename='logs/error_log.txt', level=logging.ERROR)

def scrape_company_data(url):
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'lxml')

        title = soup.title.string.strip() if soup.title else "Unknown"

        meta = soup.find("meta", attrs={"name": "description"})
        description = meta["content"].strip() if meta and meta.get("content") else "N/A"

        text = soup.get_text()

        emails = extract_emails(text)
        phones = extract_phone_numbers(text)
        social_links = extract_social_links(soup)
        tech_stack = detect_technologies(response.text)

        return {
            "url": url,
            "company_name": title,
            "description": description,
            "emails": emails,
            "phones": phones,
            "social_profiles": social_links,
            "tech_stack": tech_stack
        }

    except Exception as e:
        logging.error(f"Failed to scrape {url}: {str(e)}")
        return None
