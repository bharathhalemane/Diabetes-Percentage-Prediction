
import CommonModal from "../CommonModal"
import { Calculator, X } from "lucide-react"
import { useState } from "react"
import './calculatorClasses.css'
const SkinThicknessCalculator = ({ChangeSkinThicknessValue}) => {
    const [read1, setRead1] = useState(0)
    const [read2, setRead2] = useState(0)
    const [read3, setRead3] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [result, setResult] = useState(0)

    
    const onSubmit = e => {
        e.preventDefault()
        if(!read1 || !read2 || !read3) return
        const result = (Number(read1) + Number(read2) + Number(read3))/3
        setResult(result.toFixed(2))
    }

    const onClickClose = () => {
        setResult(0)
        setIsOpen(false)
    }

    const onClickUseButton = () => {
        ChangeSkinThicknessValue(result)
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
                    <label htmlFor="">Reading 1 <span>(mm)</span></label>
                    <input name="read1" placeholder="e.g. 22" onChange={(e) => setRead1(e.target.value) } className="form-input" />
                </div>
                <div className="input-container">
                    <label htmlFor="">Reading 2 <span>(mm)</span></label>
                    <input name="read2" placeholder="e.g. 24" onChange={(e) => setRead2(e.target.value) } className="form-input" />
                </div>
                <div className="input-container">
                    <label htmlFor="">Reading 3 <span>(mm)</span></label>
                    <input name="read3" placeholder="e.g. 23" onChange={(e) => setRead3(e.target.value) } className="form-input" />
                </div>
                <button type="submit" className="predict-btn calc-btn">Calculate</button>
            </form>
        {
            result && <div className="calculation-result-container">
                <p className="result-title">Result</p>
                <p className="result"><span>{result}</span> mm</p>
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
    
export default SkinThicknessCalculator