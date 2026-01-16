from flask import Flask, jsonify, request

app = Flask(__name__)

# Health check endpoint
@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200


# Sample GET endpoint
@app.route("/api/message", methods=["GET"])
def get_message():
    return jsonify({
        "message": "Hello from Python server"
    }), 200


# Sample POST endpoint
@app.route("/api/message", methods=["POST"])
def post_message():
    data = request.get_json()

    if not data or "text" not in data:
        return jsonify({"error": "Text is required"}), 400

    return jsonify({
        "received": data["text"]
    }), 201


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
