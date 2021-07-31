chrome.runtime.onMessage.addListener(gotMsg);
function gotMsg(msg , sender , sendResponse){
    // console.log(msg["save"]);
    // console.log(msg["add"]);
    let save;
    if(msg["save"] == true){
        console.log("Save");
        save = true;
    }
    else if(msg["add"] == true){
        console.log("Add");
        save = false;
        data = document.getElementsByTagName("body");
    }
    let bodySave = {
        "add" : data[0],
        "save" : save
    }
    chrome.runtime.sendMessage(bodySave);
}