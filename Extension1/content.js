console.log("Chrome Extension Ready to go");

let paras = document.getElementsByTagName("p");
for (ele of paras){
    ele.style["background-color"] = "#FF00FF";
}

// Recieve Message send from Background Script
chrome.runtime.onMessage.addListener(gotMsg); // Execute function

function gotMsg(msg , sender , sendResponse){
    /*
        Function run when message sent by Background Script
        @param msg : object send by Background Script
    */
   console.log(msg.txt);
   console.log(sender);
   /*
   // console.log(sendResponse);
   let message = {
        "txt" : "Message Recieved";
   }
   var send = chrome.runtime.sendMessage(sender.id, message);
   send.then(handleResponse, handleError);
   */

}