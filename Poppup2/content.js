
chrome.runtime.onMessage.addListener(gotMsg);
function gotMsg(msg , sender , sendResponse){
    console.log(msg["txt"]);

    // Change web page text
    let para = document.getElementsByTagName("p");
    for(p of para){
        p.innerHTML = msg["txt"];
    }
}