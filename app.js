var constrains = { video: { facingMode: "environment" }, audio: false};

var yesCount = 0;
var noCount = 0;
var picturesTook = 0;

const   cameraView = document.querySelector("#camera--view"),
        cameraOutput = document.querySelector("#camera--output"),
        cameraSensor = document.querySelector("#camera--sensor"),
        cameraTrigger = document.querySelector("#camera--trigger"),
        camera = document.querySelector("#camera");
        goBack = document.querySelector("#goBack")

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
}

cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");

    picturesTook = picturesTook + 1;
    cameraTrigger.style.visibility = "hidden";
    goBack.style.visibility = "visible";
}

function visibility() {
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("menu").style.display = "none";

    document.getElementById("camera").style.visibility = "visible";
}

function yes() {
    visibility();
    yesCount = yesCount + 1;
}

function no() {
    visibility();
    noCount = noCount + 1;
}

goBack.onclick = function() {
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("menu").style.display = "";

    document.getElementById("camera").style.visibility = "hidden";

    goBack.style.visibility = "hidden";
}

window.addEventListener("load", cameraStart, false);