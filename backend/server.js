import express from 'express';
import {quotes} from "./quotes.js";
import cors from 'cors';

const app = express();
app.use(cors());

let lastQuoteIndex = -1;

app.get("/quote", (req, res) => {
    let randomIndex;
    do{
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);

        lastQuoteIndex = randomIndex; 
        res.json(randomQuote);
    
});

const PORT = 3000;
app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));