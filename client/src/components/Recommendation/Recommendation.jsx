import { useEffect, useState } from "react"
import { DNA } from "react-loader-spinner"
import * as Icons from "lucide-react"
import axios from "axios"
import './Recommendation.css'

const apiProgress = {
    success: "SUCCESS",
    loading: "LOADING"
}
const Recommendation = ({ probability }) => {
    const [responseData, setResponseData] = useState([])
    const [apiStatus, setApiStatus] = useState(apiProgress.loading)
    const getRecommendData = async () => {
        setApiStatus(apiProgress.loading)
        try {
            const url = "http://localhost:4000/api/ai-recommendations"
            const response = await axios.post(url, { probability })
            const data = response.data
            setResponseData(data)
            setApiStatus(apiProgress.success)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getRecommendData()
    }, [])

    return apiStatus === apiProgress.loading ? <div className="button-containers">
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
            </div> : <div className="recommendations-container">
                <h1 className="rec-title">Tips to Stay Healthy</h1>
                <ul>
                    {
                            responseData.map(each => {
                                const IconComponent = Icons[each.icon]
                                return (
                                    <div className="rec-card">
                                        <div className="rec-icon">
                                            {IconComponent && <IconComponent size={22} />}
                                        </div>

                                        <div className="rec-content">
                                            <h3>{each.title}</h3>
                                            <p>{each.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </ul>
            </div>
    
}

export default Recommendation