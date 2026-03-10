const express = require("express")
const Groq = require("groq-sdk")

const router = express.Router();
console.log(process.env.GROQ_API_KEY)
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY  
});

router.post("/", async (req, res) => {

  const { probability } = req.body;

  try {

    const prompt = `
                You are a medical assistant.

                A diabetes prediction model produced a probability score of ${probability}%.

                Based on this risk level, generate 5 practical health recommendations.

                Each recommendation must include:
                - a short title
                - a short practical description
                - a relevant lucide-react icon name that best represents the advice

                Choose the icon that best matches the meaning of the recommendation.
                For example:
                - diet/food → Utensils
                - physical activity/exercise → Activity
                - hydration → Droplet
                - medical checkup/doctor → Stethoscope
                - sleep/rest → Moon

                Return JSON only in this exact format:

                [
                {
                "title": "",
                "description": "",
                "icon": ""
                }
                ]

                Rules:
                - Descriptions must be short (1-2 sentence).
                - Icons must be chosen based on the meaning of the recommendation.
                - Do not repeat the same icon unless necessary.
                - Only return valid JSON with no extra text.
                Keep descriptions short and practical.
              `;

    const response = await groq.chat.completions.create({
      messages: [
        {role: "user", content: prompt}
      ],
      model: "llama-3.1-8b-instant"
    })

    const text = response.choices[0].message.content

    res.json(JSON.parse(text));

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

module.exports = router

// prompt version -1 
/*const prompt = `
                You are a medical assistant.

                A diabetes prediction model produced a probability score of ${probability}%.

                Based on this risk level, generate 5 health recommendations.

                Return JSON only in this format:

                [
                {
                "title": "",
                "description": "",
                "icon": ""
                }
                ]

                Allowed lucide-react icons:
                Stethoscope
                Utensils
                Activity
                Droplet
                Moon

                Keep descriptions short and practical.
              `;*/