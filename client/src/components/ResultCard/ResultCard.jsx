import './ResultCard.css'
import { ShieldAlert, ShieldCheck } from 'lucide-react';
const ResultCard = ({ probability }) => {

    const isDiabetic = Number(probability) * 100 >= 50;
    const percentage = (Number(probability) * 100).toFixed(2)

    return (
        <div className={`result-card ${isDiabetic ? "danger" : "success"}`}>

            <div className="result-details-container">
                <div className="result-icon">
                    {isDiabetic ? <ShieldAlert size={50} /> : <ShieldCheck size={50} />}
                </div>

                <div className="result-content">
                    <h2>
                        {isDiabetic ? "Diabetes Risk Detected" : "No Diabetes Detected"}
                    </h2>

                    <p className="risk-score">
                        Risk score: <b>{percentage}%</b> — {
                            isDiabetic
                                ? "Consult a healthcare professional for further evaluation."
                                : "Your indicators appear within a healthy range."
                        }
                    </p>
                </div>
            </div>
            <p className="note">
                ⚠ This is a simplified screening tool, not a medical diagnosis. Always consult your doctor.
            </p>

        </div>
    );
};

export default ResultCard;