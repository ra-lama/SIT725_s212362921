var express = require("express");
const path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* SEPARATED MOOD CATEGORIES TO KEEP TIDY */
/* Work images */
let work = [
    "nos-010.webp",
    "pj24-005.webp",
    "pj24-007.webp"
];

/* Nature images */
let nature = [
    "pj24-004.webp",
    "nos-002.webp",
    "pj24-010.webp"
];

/* Vacation images */
let vacation = [
    "beachlife1ed-03.webp",
    "beachlife1ed-05.webp",
    "beachlife1ed-07.webp"
];

app.get('/api/moodPic/:moodCategory', (req, res) => {
    const {moodCategory} = req.params;//.moodCategory;
    // console.log(moodCat);

    const randomIndex = Math.floor(Math.random() * 3); /* Random statement modified from Prac */
    let mI = "";
    switch(moodCategory) {
        case "work":
            mI = work[randomIndex];
            break;
        case "nature":
            mI = nature[randomIndex];
            break;
        case "vacation":
            mI = vacation[randomIndex];
            break;
    }
    res.send(mI);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});