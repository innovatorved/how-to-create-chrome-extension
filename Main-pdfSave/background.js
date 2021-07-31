console.log("active bg");
chrome.runtime.onMessage.addListener(receiver);

function receiver(msg , sender , sendResponse){
    console.log("active bg2");
    console.log(msg["add"]);
    html2pdf().from(msg["add"]).save();
    console.log("done");
}