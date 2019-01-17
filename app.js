var constrains = { video: { facingMode: "environment" }, audio: false};

const   cameraView = document.querySelector("#camera--view"),
        cameraOutput = document.querySelector("#camera--output"),
        cameraSensor = document.querySelector("#camera--sensor"),
        cameraTrigger = document.querySelector("#camera--trigger"),
<<<<<<< HEAD
        yesButton = document.querySelector("#yesButton"),
        menuButtons = document.querySelector("#menuButtons"),
=======
        buttons = document.querySelector("#buttons"),
>>>>>>> cd452cb8ad7db875893a3b6eef899d85a848ee9f
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

yesButton.onclick = function() {
    menuButtons.visibility = "hidden";
    camera.visibility = "visible";

}

window.addEventListener("load", cameraStart, false);

<<<<<<< HEAD
=======
buttons.onclick() {
    buttons.visibility = "hidden";
    camera.visibility = "visible";
}
>>>>>>> cd452cb8ad7db875893a3b6eef899d85a848ee9f
