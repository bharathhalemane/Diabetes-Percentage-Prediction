import CommonModal from "../CommonModal"
import { Calculator, X } from "lucide-react"
import { useState } from "react"
import './calculatorClasses.css'
const BloodPressureCalculatorModal = ({ChangeBloodPressure}) => {
    const [systolic, setSystolic] = useState(0)
    const [diastolic, setDiastolic] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [result, setResult] = useState(0)

    const calculateMAP = (systolic, diastolic) => {
        return (systolic + (2 * diastolic)) / 3;
    }

    const onSubmit = e => {
        e.preventDefault()
        if(!systolic || !diastolic) return
        const result = calculateMAP(Number(systolic), Number(diastolic))        
        setResult(result.toFixed(2))
    }

    const onClickClose = () => {
        setResult(0)
        setIsOpen(false)
    }

    const onClickUseButton = () => {
        ChangeBloodPressure(result)
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
                    <h3 className="modal-title"><Calculator size={30} color="#259D91" />Blood Pressure Estimator</h3>
                    <p className="modal-sub-title">Enter your systolic and diastolic readings to get the diastolic value used in this tool.</p>
                </div>
                <button className="close-btn" onClick={onClickClose}><X size={20} /></button>
            </div>
            <form action="" onSubmit={onSubmit} className="modal-form">
                <div className="input-container">
                    <label htmlFor="">Systolic (top number) <span>(mmHg)</span></label>
                    <input name="systolic" placeholder="e.g. 120" onChange={(e) => setSystolic(e.target.value) } className="form-input" />
                </div>
                <div className="input-container">
                    <label htmlFor="">Diastolic (bottom number) <span>(mmHg)</span></label>
                    <input name="diastolic" placeholder="e.g. 80" onChange={(e) => setDiastolic(e.target.value) } className="form-input" />
                </div>
                <button type="submit" className="predict-btn calc-btn">Calculate</button>
            </form>
        {
            result && <div className="calculation-result-container">
                <p className="result-title">Result</p>
                <p className="result"><span>{result}</span> mmHg</p>
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
    
export default BloodPressureCalculatorModal