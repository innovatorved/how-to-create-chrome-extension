document.querySelector("#addpage").addEventListener("click", () => {
	// Run When Add Page clicked
    // console.log("Clicked Add page");
    let queryOptions = {
        "active": true, 
        "currentWindow": true 
    };
    chrome.tabs.query(queryOptions , senAddPage);
})

function senAddPage(tabs){
    let msg ={
        add : true,
        save : false
    };
    chrome.tabs.sendMessage(tabs[0].id , msg);
}

// --------------------------------------------------------------------------

document.querySelector("#savepdf").addEventListener("click", () => {
	// Run Whensavepdf
    console.log("Clicked Save page");
    let queryOptions = {
        "active": true, 
        "currentWindow": true 
    };
    chrome.tabs.query(queryOptions , SavePage);
})
function SavePage(tabs){
    let msg ={
        add : false,
        save : true
    };
    chrome.tabs.sendMessage(tabs[0].id , msg);
}
