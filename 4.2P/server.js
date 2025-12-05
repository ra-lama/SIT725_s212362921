var express = require("express");
const path = require('path');
const mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/task4pt2')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));
//changed above from the below due to errors:
/*
mongoose.connect('mongodb://localhost:27017/task4pt2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
*/

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB via .on!');
});

// like creating a table called Mood
const MoodSchema = new mongoose.Schema({
    moodType: String,
    imageTitle: String,
    fileName: String,
    alt: String,
});

const Mood = mongoose.model('Mood', MoodSchema);

app.get('/api/moodPic/:moodCategory', async (req,res) => {
    const { moodCategory } = req.params;
    console.log(`Passed mood: ${moodCategory}`);

    const moods = await Mood.find({ moodType: { $regex: moodCategory, $options: 'i' } }, {fileName: 1, _id: 0});
    res.json({statusCode: 200, data: moods, message:"Success"})
});

app.listen(port,()=>{
    console.log("Server running on: "+port);
});