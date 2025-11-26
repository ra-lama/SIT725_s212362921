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

function getMoodImg(mood) {
    let urlToGet = `/api/moodPic/${mood}`;
    console.log(`urlToGet is: ${urlToGet}`);

    fetch(urlToGet)
    .then(response => response.text())
    .then(data => {
        document.getElementById('mood-img').src = `images/${data}`;
    })
    .catch(error => {
        console.error('Error fetching image.', error);
        // document.getElementById('mood-img').innerText = "Error occurred fetching mood image.";
    });
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
