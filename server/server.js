const express = require("express")
const axios = require("axios")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/predict", async (req, res) => {
    try {

        const response = await axios.post(
            "http://localhost:5000/predict",
            req.body
        )

        res.json(response.data)

    } catch (error) {
        res.status(500).json({ error: "Prediction failed" })
    }
})

app.listen(4000, () => {
    console.log("Server running on port 4000")
})