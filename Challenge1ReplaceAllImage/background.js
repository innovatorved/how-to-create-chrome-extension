console.log("Replace all image on Webpage");

chrome.browserAction.onClicked.addListener(extenClicked);
function extenClicked(tab){
    // console.log("Extension Clicked All Image Replaced");
    let msg ={
        "allow" : "true"
    };
    chrome.tabs.sendMessage(tab.id , msg);
}