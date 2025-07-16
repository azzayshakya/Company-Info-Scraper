from scraper.input_handler import get_input_urls
from scraper.scraper import scrape_company_data
import json
import os

OUTPUT_PATH = "output/results.json"

def main():
    urls = get_input_urls()
    print("\nScraping data... Please wait...\n")

    results = []
    for url in urls:
        data = scrape_company_data(url)
        if data:
            results.append(data)

    os.makedirs("output", exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=4)

    print(f"✅ Scraping complete! {len(results)} companies saved to {OUTPUT_PATH}")

if __name__ == "__main__":
    main()
