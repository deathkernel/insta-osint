from urllib.parse import quote_plus

def build_public_search_url(area: str, keyword: str = "") -> str:
    parts = ["site:instagram.com", area]
    if keyword:
        parts.append(keyword)
    return "https://www.google.com/search?q=" + quote_plus(" ".join(parts))
