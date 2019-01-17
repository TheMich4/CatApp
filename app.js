var constrains = { video: { facingMode: "environment" }, audio: false};

const   cameraView = document.querySelector("#camera--view"),
        cameraOutput = document.querySelector("#camera--output"),
        cameraSensor = document.querySelector("#camera--sensor"),
        cameraTrigger = document.querySelector("#camera--trigger"),
        camera = document.querySelector("#camera")

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
}

function visibility() {
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("menu").style.display = "none";

    document.getElementById("camera").style.visibility = "visible";
}

function yes() {
    visibility();
}

function no() {
    visibility();
}

window.addEventListener("load", cameraStart, false);