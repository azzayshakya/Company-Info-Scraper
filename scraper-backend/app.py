from flask import Flask, request, jsonify
from flask_cors import CORS
from scraper.scraper import scrape_company_data

app = Flask(__name__)
CORS(app)

@app.route("/api/scrape", methods=["POST"])
def scrape():
    data = request.json
    urls = data.get("urls", [])

    results = []
    for url in urls:
        result = scrape_company_data(url)
        results.append(result)

    return jsonify(results), 200

if __name__ == "__main__":
    app.run(debug=True)
