import express from "express";
import questions from "./questions.js";

const app = express();
const port = 4000;

app.get("/posts/:course/:level", (req, res) => {
    const course = req.params.course;
    const level = req.params.level;
    const shuffle = ([...arr]) => {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
    };
    const sampleSize = ([...arr], n = 1) => shuffle(arr).slice(0, n);
    const quiz = sampleSize(questions[course][level], 10);
    res.json(quiz);
});

app.get("/adminposts", (req, res) => {
    res.json(questions);
});

app.post("/posts", (req, res) => {
    const questionUpdate = {
        id: questions.length + 1,
        question: req.body.question,
        options: req.body.options,
        answer: req.body.answer
    }
    questions.push(questionUpdate);
    console.log(questions);
    res.json(questionUpdate);
});

app.patch("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const existingQuestion = questions.find((question) => question.id === id);
    if (!existingQuestion)
        res.status(404).json({ message: "Question not found." });
    existingQuestion.question = req.body.question || existingQuestion.question;
    existingQuestion.options = req.body.options || existingQuestion.options;
    existingQuestion.answer = req.body.answer || existingQuestion.answer;
    res.json(existingQuestion);
});

app.delete("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const questionId = questions.findIndex((question) => question.id === id);
    if (!questionId)
        res.status(404).json({ message: "Question not found." });
    questions.splice(questionId, 1);
    res.json(questions[questionId]);
});

app.listen(port, () => {
    console.log(`API running at port ${port}`);
});
