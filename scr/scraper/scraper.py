import os
import requests
from bs4 import BeautifulSoup
from config import HEADERS
from scraper.utils import extract_emails, extract_phone_numbers
import logging

os.makedirs("logs", exist_ok=True)

logging.basicConfig(filename='logs/error_log.txt', level=logging.ERROR)

def scrape_company_data(url):
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'lxml')

        title = soup.title.string.strip() if soup.title else "Unknown"

        text = soup.get_text()

        emails = extract_emails(text)
        phones = extract_phone_numbers(text)

        return {
            "url": url,
            "company_name": title,
            "emails": emails if emails else [],
            "phones": phones if phones else []
        }

    except Exception as e:
        logging.error(f"Failed to scrape {url}: {str(e)}")
        return None
