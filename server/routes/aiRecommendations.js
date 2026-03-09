const express = require("express")
const OpenAI = require("openai")

const router = express.Router();
const client = new OpenAI({
  apiKey:process.env.OPENAI_API_KEY
});

router.post("/", async (req, res) => {

  const { probability } = req.body;

  try {

    const prompt = `
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
`;

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt
    });

    const text = response.output[0].content[0].text;

    res.json(JSON.parse(text));

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

module.exports = router