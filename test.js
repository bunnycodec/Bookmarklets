// Encoded by Bunny

alert("Sunny Kumar");

{
  webPreferences: {
    webSecurity: false
  }
}

(function() {
    var list = document.getElementsByTagName('img');
    for(let i=0; i<list.length; i++) {
        list[i].style.border = "5px dotted red";
        var temp = document.createElement('p');
        var text = document.createTextNode("This is an image");
        temp.appendChild(text);
    }
})();
