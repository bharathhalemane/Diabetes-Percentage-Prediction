import pandas as pd 
import numpy as np
import joblib
from sklearn.model_selection import train_test_split 
from sklearn.preprocessing import StandardScaler 

import tensorflow as tf 
from tensorflow import keras 

data = pd.read_csv("dataset/diabetes.csv")

x = data.drop("Outcome", axis =1)
y=data["Outcome"]

x_train, x_test, y_train, y_test = train_test_split(
    x, y, test_size=0.2, random_state=42
)

scaler = StandardScaler() 

x_train = scaler.fit_transform(x_train)
x_test = scaler.transform(x_test)

model = keras.Sequential([
    keras.layers.Dense(16, activation="relu", input_shape=(8,)),
    keras.layers.Dense(8, activation="relu"),
    keras.layers.Dense(1, activation="sigmoid")
])

model.compile(
    optimizer = "adam",
    loss="binary_crossentropy",
    metrics=["accuracy"]
)

model.fit(
    x_train,
    y_train,
    epochs=50,
    batch_size=16,
    validation_split=0.1
)
joblib.dump(scaler, "scaler.pkl")
loss, accuracy = model.evaluate(x_test, y_test)

print("Accuracy:", accuracy)

model.save("diabetes_model")
model.save("diabetes_model.keras")