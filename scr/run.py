from scraper.input_handler import get_input_urls

def main():
    urls = get_input_urls()
    print("Received URLs:", urls)

if __name__ == "__main__":
    main()
