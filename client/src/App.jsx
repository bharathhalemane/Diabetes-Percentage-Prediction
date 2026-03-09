import { useState } from "react"
import axios from "axios"
import "./App.css"

function App() {
    const [form,setForm] = useState({
      pregnancies:"",
      glucose:"",
      bloodPressure:"",
      skinThickness:"",
      insulin:"",
      bmi:"",
      diabetesPedigree:"",
      age:""
    })

    const [result,setResult] = useState("")
    const [prob,setProb] = useState("")

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const res = await axios.post("http://localhost:4000/predict",form)

        setResult(res.data.prediction)
        setProb(res.data.probability)      
    }

return (
    <div className="container">
        <div className="card">
            <h1>Diabetes Prediction</h1>

            <form onSubmit={handleSubmit} className="form-grid">

                <input name="pregnancies" placeholder="Pregnancies" onChange={handleChange}/>
                <input name="glucose" placeholder="Glucose Level" onChange={handleChange}/>
                <input name="bloodPressure" placeholder="Blood Pressure" onChange={handleChange}/>
                <input name="skinThickness" placeholder="Skin Thickness" onChange={handleChange}/>
                <input name="insulin" placeholder="Insulin" onChange={handleChange}/>
                <input name="bmi" placeholder="BMI" onChange={handleChange}/>
                <input name="diabetesPedigree" placeholder="Diabetes Pedigree" onChange={handleChange}/>
                <input name="age" placeholder="Age" onChange={handleChange}/>

                <button type="submit">Predict</button>
            </form>

          {result && (
            <div className="result">
              <h2>Result: {result}</h2>
              <p>Probability: {(prob * 100).toFixed(2)}%</p>
            </div>
          )}
      </div>
    </div>
)

}

export default App