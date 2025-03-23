// js logic

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.length > 0) {
        // calling API URL and adding it as an image
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        
        // showing qr code
        imgBox.classList.add("show-img");
    }
    else {
        qrText.classList.add("error");
        setTimeout(() => {
            // shake animation for 10 times
            qrText.classList.remove("error");
        }, 1000);
    }
}