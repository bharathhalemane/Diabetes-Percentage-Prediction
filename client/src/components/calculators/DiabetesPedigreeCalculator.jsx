import CommonModal from "../CommonModal"
import { Calculator, X } from "lucide-react"
import { useState } from "react"
import './calculatorClasses.css'
const DiabetesPedigreeCalculator = ({ChangePedigreeValue}) => {
    const [relativeDiabetes, setRelativeDiabetes] = useState(0)
    const [relatives, setRelatives] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [result, setResult] = useState(0)

    

    const onSubmit = e => {
        e.preventDefault()
        if (!relativeDiabetes || !relatives) return
        const result = Number(relativeDiabetes) / Number(relatives)
        setResult(result.toFixed(2))
    }

    const onClickClose = () => {
        setResult(0)
        setIsOpen(false)
    }

    const onClickUseButton = () => {
        ChangePedigreeValue(result)
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
                    <h3 className="modal-title"><Calculator size={30} color="#259D91" />Pedigree Function Estimator</h3>
                    <p className="modal-sub-title">Estimate based on family history. Answer: how many close relatives (parent/siblings) have diabetes, and your total close relative count.</p>
                </div>
                <button className="close-btn" onClick={onClickClose}><X size={20} /></button>
            </div>
            <form action="" onSubmit={onSubmit} className="modal-form">
                <div className="input-container">
                    <label htmlFor="">Systolic (top number) <span>(mmHg)</span></label>
                    <input name="relativeDiabetes" placeholder="e.g. 2" onChange={(e) => setRelativeDiabetes(e.target.value) } className="form-input" />
                </div>
                <div className="input-container">
                    <label htmlFor="">Diastolic (bottom number) <span>(mmHg)</span></label>
                    <input name="relatives" placeholder="e.g. 6" onChange={(e) => setRelatives(e.target.value) } className="form-input" />
                </div>
                <button type="submit" className="predict-btn calc-btn">Calculate</button>
            </form>
        {
            result && <div className="calculation-result-container">
                <p className="result-title">Result</p>
                <p className="result"><span>{result}</span> function</p>
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
    
export default DiabetesPedigreeCalculator