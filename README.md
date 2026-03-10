# 🧠 Diabetes Prediction System (MERN + Machine Learning)

A full-stack **Diabetes Prediction System** that uses **Machine Learning and the MERN stack** to estimate the risk of diabetes based on medical parameters. The system allows users to enter health data and receive a prediction indicating whether diabetes is likely, along with a probability score.

This project demonstrates how **AI models can be integrated with modern web applications** to create real-world healthcare analytics tools.

---

# 🚀 Project Overview

Diabetes is one of the most common chronic diseases worldwide. Early detection can help people take preventive measures and seek medical advice.

This application analyzes health metrics such as:

* Glucose level
* BMI (Body Mass Index)
* Age
* Blood Pressure
* Insulin level
* Skin Thickness
* Pregnancies
* Diabetes Pedigree Function

Using these parameters, the machine learning model predicts whether the person has a **high or low risk of diabetes**.

⚠️ **Note:**
This system is intended for **educational and research purposes only** and should not replace professional medical diagnosis.

---

# 🏗 System Architecture

```
React Frontend
      │
      ▼
Node.js + Express API
      │
      ▼
TensorFlow.js Machine Learning Model
      │
      ▼
Prediction Result
```

The machine learning model is trained in **Python using TensorFlow**, then converted to **TensorFlow.js** so it can run inside the Node.js backend.

---

# 🧰 Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* TensorFlow.js

### Machine Learning

* Python
* TensorFlow / Keras
* Scikit-learn
* Pandas
* Numpy

### Dataset

* PIMA Indians Diabetes Dataset

---

# 📊 Machine Learning Workflow

1️⃣ Load the diabetes dataset
2️⃣ Perform data preprocessing and cleaning
3️⃣ Normalize input features using **StandardScaler**
4️⃣ Split dataset into **training and testing sets**
5️⃣ Train a **Neural Network model**
6️⃣ Evaluate model accuracy
7️⃣ Convert the trained model to **TensorFlow.js format**
8️⃣ Integrate the model with the **Node.js API**

---

# 📁 Project Structure

```
diabetes-prediction-system
│
├── ml-model
│   ├── dataset
│   │   └── diabetes.csv
│   │
│   ├── train_model.py
│   ├── requirements.txt
│   └── tfjs_model
│
├── backend
│   ├── server.js
│   ├── routes
│   │   └── predict.js
│   └── model
│
└── frontend
    └── React App
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/diabetes-prediction-system.git
```

```
cd diabetes-prediction-system
```

---

# 🧠 Train the Machine Learning Model

Navigate to the ML folder:

```
cd ml-model
```

Install dependencies:

```
pip install -r requirements.txt
```

Train the model:

```
python train_model.py
```

Convert model to TensorFlow.js:

```
tensorflowjs_converter \
--input_format keras \
diabetes_model \
tfjs_model
```

---

# 🖥 Backend Setup

Navigate to backend:

```
cd backend
```

Install dependencies:

```
npm install
```

Start server:

```
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

# 🌐 Frontend Setup

Navigate to frontend:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run the app:

```
npm start
```

Application runs on:

```
http://localhost:3000
```

---

# 📥 Example Input

```
Pregnancies: 2
Glucose: 150
Blood Pressure: 85
Skin Thickness: 20
Insulin: 130
BMI: 34
Diabetes Pedigree Function: 0.6
Age: 45
```

---

# 📤 Example Output

```
Prediction: Diabetes
Probability: 0.81
```

Meaning the system predicts **81% probability of diabetes risk** based on the given health data.

---

# ✨ Features

✔ AI-based diabetes risk prediction
✔ Full-stack MERN implementation
✔ Machine learning model integration
✔ Real-time prediction using API
✔ Probability-based results

---

# 📚 What I Learned

Through this project I gained experience in:

* Machine Learning model development
* Data preprocessing and feature engineering
* Integrating ML models with web applications
* Building REST APIs
* Full-stack MERN development
* TensorFlow.js model deployment

---

# 🔮 Future Improvements

* Patient login system
* Prediction history storage
* Health recommendation system
* Visualization charts for health metrics
* Deploying the system to the cloud

---

# 👨‍💻 Author

**Bharath Halemane**

Passionate about **Artificial Intelligence, Machine Learning, and Full-Stack Development**.

---

# ⭐ Support

If you found this project helpful, please consider **starring the repository** ⭐
