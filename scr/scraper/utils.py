import re

def extract_emails(text):
    return re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text)

def extract_phone_numbers(text):
    return re.findall(r'\+?\d[\d\s().-]{7,}\d', text)
