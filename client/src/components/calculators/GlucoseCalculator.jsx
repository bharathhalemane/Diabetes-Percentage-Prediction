import CommonModal from "../CommonModal"
import { Calculator, X } from "lucide-react"
import { useState } from "react"
import './calculatorClasses.css'

const GlucoseCalculator = ({ ChangeGlucoseValue }) => {
    const [glucose, setGlucose] = useState(0)    
    const [isOpen, setIsOpen] = useState(false)
    const [result, setResult] = useState(0)

    

    const onSubmit = e => {
        e.preventDefault()
        if(!glucose) return
        const result = Number(glucose) * 18;
        setResult(result.toFixed(0))        
    }

    const onClickClose = () => {
        setResult(0)
        setIsOpen(false)
    }

    const onClickUseButton = () => {
        ChangeGlucoseValue(result)
        setIsOpen(false)
        setResult(0)
    }
    
    const modal = () => {
        return <CommonModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}   
            maxWidth={500}
        >   
            <div className="modal-header">
                <div className="heading-details">
                    <h3 className="modal-title"><Calculator size={30} color="#259D91" />Glucose Unit Converter</h3>
                    <p className="modal-sub-title">Convert from mmol/L to mg/dL if your lab report uses different units.</p>
                </div>
                <button className="close-btn" onClick={onClickClose}><X size={20} /></button>
            </div>
            <form action="" onSubmit={onSubmit} className="modal-form">
                <div className="input-container">
                    <label htmlFor="">Glucose <span>(mmol/L)</span></label>
                    <input name="glucose" placeholder="e.g. 6.5" onChange={(e) => setGlucose(e.target.value) } className="form-input" />
                </div>                
                <button type="submit" className="predict-btn calc-btn">Calculate</button>
            </form>
        {
            result && <div className="calculation-result-container">
                <p className="result-title">Result</p>
                <p className="result"><span>{result}</span> mg/dL</p>
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
    
export default GlucoseCalculator