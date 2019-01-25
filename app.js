var constrains = { video: { facingMode: "environment" }, audio: false};

var yesCount = 0;
var noCount = 0;
var picturesTook = 0;

var cat = true;
var catimage = new Image(100, 200);
catimage.src = 'Cat-icon.png';

const   cameraView = document.querySelector("#camera--view"),
        cameraOutput = document.querySelector("#camera--output"),
        cameraSensor = document.querySelector("#camera--sensor"),
        cameraTrigger = document.querySelector("#camera--trigger"),
        camera = document.querySelector("#camera"),
        stats = document.querySelector(".stats")

function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constrains)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Someting is broken.", error);
        });

        document.getElementById("result").style.visibility = "hidden";
}

cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");

    // Disable live view from camera after taking a photo
    cameraView.style.visibility = "hidden";

    // Makes result visible, so the previous result isn't visible before another one is taken
    document.getElementById("result").style.visibility = "visible";

    picturesTook = picturesTook + 1;

    // Hides 'Take a picture' button and makes 'Go Back' button visible
    cameraTrigger.style.visibility = "hidden";

    // Play sound
    if (cat == true) {
        var audio = new Audio("cat.mp3");
        audio.play();
    }
        
        if (cat == false) {
        var audio = new Audio("Sad_Trombone.mp3");
        audio.play();
    }    
}

function visibility() {
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("menu").style.display = "none";

    cameraView.style.visibility = "visible";
    cameraTrigger.style.visibility = "visible";
    camera.style.visibility = "visible";
}

function yes() {
    cat = true;
    visibility();
    document.getElementById("answer").style.backgroundColor = "green";
    yesCount = yesCount + 1;
}

function no() {
    cat = false;
    visibility();
    document.getElementById("answer").style.backgroundColor = "red";
    noCount = noCount + 1;
}

function goBackToMenu() {
    document.getElementById("camera").style.visibility = "hidden";
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("menu").style.display = "";
    document.getElementById("result").style.visibility = "hidden";

    refreshStats();
}

function refreshStats() {
    var container = document.querySelector(".stats");
    container.innerHTML = "yesCount + \" | \" + noCount";
    container.appendChild(catimage);
}

// Reseting stats visible on main screen
function resetStats() {
    yesCount = 0;
    noCount = 0;
    refreshStats();
}

function manual() {
    var audio = new Audio("manual.mp3");
    audio.play();
}
window.addEventListener("load", cameraStart, false);
