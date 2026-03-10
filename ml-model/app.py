from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
import joblib
app = Flask(__name__)

model = tf.keras.models.load_model("diabetes_model.keras")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    scaler = joblib.load("scaler.pkl")

    features = np.array([
        float(data["pregnancies"]),
        float(data["glucose"]),
        float(data["bloodPressure"]),
        float(data["skinThickness"]),
        float(data["insulin"]),
        float(data["bmi"]),
        float(data["diabetesPedigree"]),
        float(data["age"])
    ]).reshape(1, -1)

    features = scaler.transform(features)
    prediction = model.predict(features)[0][0]
    result = "Diabetes" if prediction > 0.5 else "No Diabetes"

    return jsonify({
        "prediction": result,
        "probability": float(prediction)
    })

if __name__ == "__main__":
    app.run(port=5000)