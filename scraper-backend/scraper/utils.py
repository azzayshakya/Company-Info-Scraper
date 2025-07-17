import re

def extract_emails(text):
    return re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text)

def extract_phone_numbers(text):
    return re.findall(r'\+?\d[\d\s().-]{7,}\d', text)

def extract_social_links(soup):
    social_links = {
        "linkedin": None,
        "twitter": None,
        "facebook": None
    }
    for link in soup.find_all("a", href=True):
        href = link["href"]
        if "linkedin.com" in href and not social_links["linkedin"]:
            social_links["linkedin"] = href
        elif "twitter.com" in href and not social_links["twitter"]:
            social_links["twitter"] = href
        elif "facebook.com" in href and not social_links["facebook"]:
            social_links["facebook"] = href
    return social_links

def detect_technologies(html_text):
    tech_keywords = ["React", "Vue", "Angular", "Node.js", "Django", "Flask", "Laravel", "MongoDB", "Firebase", "PostgreSQL"]
    found = [tech for tech in tech_keywords if tech.lower() in html_text.lower()]
    return list(set(found))
