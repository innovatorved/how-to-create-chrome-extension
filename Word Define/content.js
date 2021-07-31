console.log("Content Script Working");

window.addEventListener("mouseup" , funMouseUp);

function funMouseUp(){
    // console.log("text Selected");

    // Copy selected text
    let preSelectedText = window.getSelection().toString();
    // console.log(preSelectedText);

    // Check Selected String have Something
    if(preSelectedText.length > 1){

        // Send Msg to Background Script
        let msg = {
            "text" : preSelectedText
        }
        chrome.runtime.sendMessage(msg);
    }
}