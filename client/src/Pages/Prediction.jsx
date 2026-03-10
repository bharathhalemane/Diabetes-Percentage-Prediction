import { useState } from "react"
import axios from "axios"
import './Prediction.css'
import { Activity, Heart, Droplets, Syringe, User, TrendingUp, Baby, Ruler, Dna } from "lucide-react";
import BloodPressureCalculatorModal from "../components/calculators/BloodPressureCalculator";
import InsulinCalculator from "../components/calculators/InsulinCalculator";
import DiabetesPedigreeCalculator from "../components/calculators/DiabetesPedigreeCalculator";
import GlucoseCalculator from "../components/calculators/GlucoseCalculator";
import BMICalculator from "../components/calculators/BMICalculator";
import SkinThicknessCalculator from "../components/calculators/SkinThicknessCalculator";
import ResultCard from "../components/ResultCard/ResultCard";
import Recommendation from "../components/Recommendation/Recommendation"
import {DNA} from "react-loader-spinner"
const apiProgress = {
    success : "SUCCESS",
    loading: "LOADING"
}
const Prediction = () => {
    const [form, setForm] = useState({
        pregnancies: "",
        glucose: "",
        bloodPressure: "",
        skinThickness: "",
        insulin: "",
        bmi: "",
        diabetesPedigree: "",
        age: ""
    })

    const [apiStatus, setApiStatus] = useState("")
    const [result, setResult] = useState("1")
    const [prob, setProb] = useState(0.86)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setApiStatus(apiProgress.loading)
        
        const res = await axios.post("http://localhost:4000/predict", form)
        
        setApiStatus(apiProgress.success)
        setResult(res.data.prediction)
        setProb(res.data.probability)
        
    }

    const changeBloodPressure = (result) => {        
        setForm({...form, bloodPressure: result})
    }

    const changeInsulinValue = (result) => {
        setForm({...form, insulin: result})
    }

    const changePedigreeValue = (result) => {
        setForm({...form, diabetesPedigree: result})
    }

    const changeGlucoseValue = (result) => {
        setForm({...form, glucose: result})
    }

    const changeBMIValue = (result) => {
        setForm({...form, bmi: result})
    }

    const changeSkinThicknessValue = (result) => {
        setForm({...form, skinThickness: result})
    }

return (
    <div className="container">
        <div className="header-container">
            <div className="activity-logo"><Activity/></div>
            <h1>Diabetes Prediction</h1>
            <p>Enter your medical data below to get an instant risk assessment</p> 
        </div>      

        <form onSubmit={handleSubmit} className="form-grid">
            <div className="input-container">
                <label htmlFor=""><Baby color="#259D91" size={18}/>Pregnancies <span>(count)</span></label>
                <input name="pregnancies" placeholder="e.g. 2" onChange={handleChange} className="form-input" value={form.pregnancies}/>    
            </div>
            <div className="input-container">
                <label htmlFor=""><Droplets color="#259D91" size={18}/>Glucose Level <span>(mg/dl)</span></label>
                <div className="input-and-calc">
                    <input name="glucose" placeholder="e.g. 120" onChange={handleChange} className="form-input" value={form.glucose} />
                    <GlucoseCalculator ChangeGlucoseValue={changeGlucoseValue} />
                </div>
            </div>
            <div className="input-container">
                <label htmlFor=""><Heart color="#259D91" size={18}/>Blood Pressure <span>(mmHg)</span></label>
                <div className="input-and-calc">
                    <input name="bloodPressure" placeholder="e.g. 80" onChange={handleChange} className="form-input" value={form.bloodPressure}/>
                    <BloodPressureCalculatorModal ChangeBloodPressure={changeBloodPressure} />
                </div>
            </div>
            <div className="input-container">

                <label htmlFor=""><Ruler color="#259D91" v/>Skin Thickness <span>(mm)</span></label>
                <div className="input-and-calc">
                    <input name="skinThickness" placeholder="e.g. 20" onChange={handleChange} className="form-input" value={form.skinThickness} />
                    <SkinThicknessCalculator ChangeSkinThicknessValue={changeSkinThicknessValue} />
                </div>
            </div>
            <div className="input-container">
                <label htmlFor=""><Syringe color="#259D91" size={18}/>Insulin <span>(µu/ml)</span></label>
                <div className="input-and-calc">
                    <input name="insulin" placeholder="e.g. 85" onChange={handleChange} className="form-input" value={form.insulin}/>
                    <InsulinCalculator ChangeInsulinValue={changeInsulinValue} />
                </div>
            </div>
            <div className="input-container">
                <label htmlFor=""><TrendingUp color="#259D91" size={18}/>BMI <span>(kg/m²)</span></label>
                <div className="input-and-calc">
                    <input name="bmi" placeholder="e.g. 28.5" onChange={handleChange} className="form-input" value={form.bmi} />
                    <BMICalculator ChangeBMIValue={ changeBMIValue} />
                </div>
            </div>
            <div className="input-container">
                <label htmlFor=""><Dna color="#259D91" size={18}/>Diabetes Pedigree <span>(function)</span></label>
                <div className="input-and-calc">
                    <input name="diabetesPedigree" placeholder="e.g. 0.47" onChange={handleChange} className="form-input" value={form.diabetesPedigree} />
                    <DiabetesPedigreeCalculator ChangePedigreeValue={changePedigreeValue} />
                </div>
            </div>
            <div className="input-container">
                <label htmlFor=""><User color="#259D91" size={18}/>Age <span>(years)</span></label>
                <input name="age" placeholder="e.g. 45" onChange={handleChange} className="form-input" value={form.age}/>
            </div>

            
            {
                apiStatus === apiProgress.loading ? 
                    <div className="button-containers">
                        <div className="loader">
                            <DNA
                                visible={true}
                                height="60"
                                width="60"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            />
                        </div>
                    </div> : <div className="button-containers">
                <button type="submit" className="predict-btn"><Activity size={20}/> Predict</button>
                <button type="reset" className="reset-btn">Reset</button>
            </div>
            }
        </form>

        {result && <ResultCard probability={prob} />}
        {result && <Recommendation probability={prob}/>}
      
    </div>
)

}

export default Prediction