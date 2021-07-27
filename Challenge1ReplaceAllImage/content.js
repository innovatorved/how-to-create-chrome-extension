console.log("Chrome Extension for replace content side images");

let files = [
    "1.jpg",
    "2.png",
    "3.png",
    "4.png"
];

chrome.runtime.onMessage.addListener(gotMsg);
function gotMsg(msg , sender , sendResponse){
    // console.log(msg.allow);
    if (msg.allow == "true"){
        console.log("allowed");
        let images = document.getElementsByTagName("img");
        for(img of images){
            let random = Math.floor(Math.random() * files.length);
            let imgfile = "img/"+files[random];
            let url = chrome.extension.getURL(imgfile);
            img.src = url;
            // console.log(url);
        }
        console.log("changed");
    }
    else{
        console.log("Editing webpage not allowed by Background Script");
    }
}