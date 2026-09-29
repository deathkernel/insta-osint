from flask import Flask, jsonify, render_template, request
from search import build_public_search_url

app = Flask(__name__)

@app.get("/")
def home():
    return render_template("index.html")

@app.post("/api/search")
def search():
    data = request.get_json(silent=True) or {}
    area = str(data.get("area", "")).strip()
    keyword = str(data.get("keyword", "")).strip()
    if not area:
        return jsonify({"success": False, "error": "Area is required."}), 400
    return jsonify({"success": True, "query": {"area": area, "keyword": keyword}, "search_url": build_public_search_url(area, keyword)})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
