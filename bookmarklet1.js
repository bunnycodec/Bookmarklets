// Encoded by Bunny

(function() {
    console.log("Bookmarklet has started");
    var list = document.getElementsByTagName('p');
    for(let i=0; i<list.length; i++) {
        list[i].innerHTML = "Encoded By Bunny";
    }
})();
