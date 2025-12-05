const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task4pt2')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));


const MoodSchema = new mongoose.Schema({
    moodType: String,
    imageTitle: String,
    fileName: String,
    alt: String,
});

const Mood = mongoose.model('Mood', MoodSchema);

const moodGallery = [
    {
        moodType: "Work",
        imageTitle: "Work mood 1",
        fileName: "images/nos-010.webp",
        alt: "Programmer and musician life in the early 2000s",
    },
    {
        moodType: "Work",
        imageTitle: "Work mood 2",
        fileName: "images/pj24-005.webp",
        alt: "Researching at a desk at sunset",
    },
    {
        moodType: "Work",
        imageTitle: "Work mood 3",
        fileName: "images/pj24-007.webp",
        alt: "Minimal workspace"
    },
    {
        moodType: "Nature",
        imageTitle: "Nature mood 1",
        fileName: "images/nos-002.webp",
        alt: "In the mountains of Japan"
    },
    {
        moodType: "Nature",
        imageTitle: "Nature mood 2",
        fileName: "images/pj24-004.webp",
        alt: "A flower in the grass"
    },
    {
        moodType: "Nature",
        imageTitle: "Nature mood 3",
        fileName: "images/pj24-010.webp",
        alt: "Lavender field on a sunny day"
    },
    {
        moodType: "Vacation",
        imageTitle: "Vacation mood 1",
        fileName: "images/beachlife1ed-03.webp",
        alt: "A seagull on the beach looking at the water"
    },
    {
        moodType: "Vacation",
        imageTitle: "Vacation mood 2",
        fileName: "images/beachlife1ed-05.webp",
        alt: "A hot day on the Gold Coast"
    },
    {
        moodType: "Vacation",
        imageTitle: "Vacation mood 3",
        fileName: "images/beachlife1ed-07.webp",
        alt: "A nostalgic afternoon at the beach"
    }
];

Mood.insertMany(moodGallery)
    .then(() => {
    console.log("Mood gallery info inserted into db.");
    mongoose.connection.close();
    })
    .catch(err => console.error(err));