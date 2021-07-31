console.log("Background Script Running");

chrome.runtime.onMessage.addListener(receiver);
window.word = ""; // to use globally
function receiver(msg , sender , sendResponse){
    window.word = msg.text; 
    console.log(msg.text);
}
