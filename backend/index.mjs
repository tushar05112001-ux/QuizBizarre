import express from "express"
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

console.log(process.env.GEMINI_API_KEY);

const app = express();
const PORT = 5000;
const ai = new GoogleGenAI({});

async function generateQuiz(topic, count) {
  try {
    const interaction = await ai.interactions.create({
      model: "gemini-3.5-flash-lite", //
      input: `Generate a ${count}-question multiple-choice quiz about the topic: "${topic}".`,
      
      // ✅ Correct format for the Interactions API
      response_format: {
        type: "text",
        mime_type: "application/json",
        schema: {
          type: "ARRAY",
          description: "A list of multiple choice quiz questions.",
          items: {
            type: "OBJECT",
            properties: {
              question: { type: "STRING" },
              options: {
                type: "ARRAY",
                items: { type: "STRING" }
              },
              correctAnswer: { type: "STRING" },
              explanation: { type: "STRING" }
            },
            required: ["question", "options", "correctAnswer", "explanation"]
          }
        }
      }
    });

    // interaction.output_text will now be guaranteed clean, parseable JSON
    const quizData = JSON.parse(interaction.output_text);
    return quizData;

  } catch (error) {
    console.error("Failed to generate quiz:", error);
  }
}

// Example usage:
//const cleanQuizArray = await generateQuiz("MongoDB Indexing", 3);
//console.log(cleanQuizArray);

app.get("/",async (req, res) => {
  // Example usage:
const cleanQuizArray = await generateQuiz("MongoDB",5);
console.log(cleanQuizArray);
  res.send(cleanQuizArray);
});

app.listen(PORT, () => {
  console.log("Server running on port:",PORT);
});
