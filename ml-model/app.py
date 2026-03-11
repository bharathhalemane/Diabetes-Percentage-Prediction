from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
import joblib

app = Flask(__name__)

# Load model and scaler only once when server starts
model = tf.keras.models.load_model("diabetes_model.keras")
scaler = joblib.load("scaler.pkl")


@app.route("/")
def home():
    return {"message": "Diabetes Prediction API Running 🚀"}


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        features = np.array([[
            float(data["pregnancies"]),
            float(data["glucose"]),
            float(data["bloodPressure"]),
            float(data["skinThickness"]),
            float(data["insulin"]),
            float(data["bmi"]),
            float(data["diabetesPedigree"]),
            float(data["age"])
        ]])

        # Scale features
        features = scaler.transform(features)

        # Predict
        prediction = model.predict(features)[0][0]

        result = "Diabetes" if prediction > 0.5 else "No Diabetes"

        return jsonify({
            "prediction": result,
            "probability": float(prediction)
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)