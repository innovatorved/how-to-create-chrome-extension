(function(){
    console.log("Bookmark Starting");
    let paragraphs = document.getElementsByTagName("p");
    for (let i=0; i<paragraphs.length; i++){
        paragraphs[i].innerHTML = "changed";
        paragraphs[i].style["background-color"] = '#C0C';

    }
})();