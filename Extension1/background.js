console.log("Background Script Running");

// Listen the Browser action when anybody presses chrome extension
chrome.browserAction.onClicked.addListener(buttonClicked);

// Create Button clicked function
function buttonClicked(tab){
    /* 
        Execute when tab Clicked 
        @paragram tab : argument listen the information about tab
    */
    console.log("Extension clicked");
    console.log(tab);

    // communicate with content.js when button is clicked
    // msg object
    let msg = {
        "txt" : "Hello I am Working yooo"
    };
    chrome.tabs.sendMessage(tab.id , msg); // Define tab id which you want to sent and json Object
}
