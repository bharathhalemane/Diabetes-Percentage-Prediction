import CommonModal from "../CommonModal"
import { Calculator, X } from "lucide-react"
import { useState } from "react"
import './calculatorClasses.css'
const BMICalculator = ({ChangeBMIValue}) => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [result, setResult] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!weight || !height) return

        const heightInMeters = Number(height) / 100
        const bmi = Number(weight) / (heightInMeters ** 2)

        setResult(bmi.toFixed(2))
    }

    const onClickClose = () => {
        setResult(0)
        setIsOpen(false)
    }

    const onClickUseButton = () => {
        ChangeBMIValue(result)
        setResult(0)
        setIsOpen(false)
        
    }
    
    const modal = () => {
        return <CommonModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}   
            maxWidth={500}
        >   
            <div className="modal-header">
                <div className="heading-details">
                    <h3 className="modal-title"><Calculator size={30} color="#259D91" />BMI Calculator</h3>
                    <p className="modal-sub-title">Body Mass Index = weight (kg) / height² (m²)</p>
                </div>
                <button className="close-btn" onClick={onClickClose}><X size={20} /></button>
            </div>
            <form action="" onSubmit={onSubmit} className="modal-form">
                <div className="input-container">
                    <label htmlFor="">Weight <span>(kg)</span></label>
                    <input name="weight" placeholder="e.g. 70" onChange={(e) => setWeight(e.target.value) } className="form-input" />
                </div>
                <div className="input-container">
                    <label htmlFor="">Height <span>(cm)</span></label>
                    <input name="height" placeholder="e.g. 170" onChange={(e) => setHeight(e.target.value) } className="form-input" />
                </div>
                <button type="submit" className="predict-btn calc-btn">Calculate</button>
            </form>
        {
            result && <div className="calculation-result-container">
                <p className="result-title">Result</p>
                <p className="result"><span>{result}</span> kg/m²</p>
                <button onClick={onClickUseButton} className="use-btn">Use this value</button>
            </div>
        }
        </CommonModal>
    }
    return <div>        
        <button onClick={() => setIsOpen(true)} className="calculator-btn"><Calculator size={20} /></button>
        {modal()}
    </div>
}
    
export default BMICalculator