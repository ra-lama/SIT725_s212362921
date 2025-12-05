const lightDarkToggle = () => {
    const element = document.body;
    const computedStyle = window.getComputedStyle(element);
    const bgVal = computedStyle.getPropertyValue("background-color");

    // console.log(bgVal);
    // console.log(typeof(bgVal)); // string

    if(bgVal === "rgba(255, 255, 255, 0)") {
        document.body.style.setProperty("background-color", "#1a8cff");
    }
    else {
        document.body.style.setProperty("background-color", "rgba(255, 255, 255, 0)");
    }
}

// Previously, in 3.2P calling /api/moodPic/:mood
/*
function getMoodImg(mood) {
    let urlToGet = `/api/moodPic/${mood}`;
    console.log(`urlToGet is: ${urlToGet}`);

    // fetch(urlToGet)
    // .then(response => response.text())
    // .then(data => {
    //     document.getElementById('mood-img').src = `${data}`;
    // })
    // .catch(error => {
    //     console.error('Error fetching image.', error);
    //     // document.getElementById('mood-img').innerText = "Error occurred fetching mood image.";
    // });
}
*/
// Now here in 4.2P, but still calls /api/moodPic/:mood
const getMoodImg = (mood) => {
    $.get(`/api/moodPic/${mood}`, (response) => {
        if(response.statusCode==200){
            rndmMood(response.data);
        }
    });
};

function rndmMood(moods) {
    const randomIndex = Math.floor(Math.random() * moods.length);
    console.log("Random index is: ", randomIndex);
    console.log("Mood at random index: ", moods[randomIndex]);
    document.getElementById('mood-img').src = `${moods[randomIndex].fileName}`;
}

$(document).ready(function() {
    $('#toggleBg').click(()=>{
        lightDarkToggle();
    });

    /* 
     * For Materialize's sidenav small screens Hamburger menu
     * Bottom of page, "Mobile Collapse Button": https://materializecss.com/navbar.html
     */
    $('.sidenav').sidenav();

    $('#workBtn').click(()=>{
        getMoodImg("work");
    });

    $('#natureBtn').click(()=>{
        getMoodImg("nature");
    });

    $('#vacationBtn').click(()=>{
        getMoodImg("vacation");
    });
});
