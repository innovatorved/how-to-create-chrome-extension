function setup(){
    noCanvas();
    let userinput = select("#userinput");
    userinput.input(getCurrentTab);
}

function newText(tab){
    // Send a msg to Content Script 
    // declare permission in manifest.json for tabs
    // chrome.tabs.getCurrent(gotto);
    // let data = getCurrentTab();
    // console.log(data);
    console.log(tab);

}

function getCurrentTab() {
    let queryOptions = {
        "active": true, 
        "currentWindow": true 
    };
    chrome.tabs.query(queryOptions , goto);
}

function goto(tabs){
    // Variable tab contain list of all tab
    // console.log(tabs);
    // let message = userIn.value();
    // console.log(userinput);

    let msg ={
        "txt" : userinput.value
    };
    chrome.tabs.sendMessage(tabs[0].id , msg);
}