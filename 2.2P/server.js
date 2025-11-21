var express = require("express");
const path = require('path');
var app = express();
var port = process.env.port || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function additionCalc(a, b) {
    let tmpSum = 0;

    if(isNaN(a) || isNaN(b)) {
        return `The sum cannot be calculated with non-numbers.`;
    }
    else {
        console.log("Both numbers!");
        tmpSum = Number(a) + Number(b);
        return `The sum of ${a} and ${b} is ${tmpSum}.`;
    }
}

/* 
    When reading on OReilly, I found that this format allows
    both URL calls with the parameters
    and the JavaScript call within the page.
    So I wanted to use it here.
*/
app.get('/api/addition/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params; // req.query prev
    const totalSum = additionCalc(num1, num2);

    res.send(totalSum);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});