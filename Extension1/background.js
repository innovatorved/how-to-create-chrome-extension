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
}