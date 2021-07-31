// console.log("working");

// Access elements of Background page
let bgEle = chrome.extension.getBackgroundPage();
let word = bgEle.word;

// console.log(word);
let p = document.getElementsByTagName("p");
p[0].innerHTML = word;