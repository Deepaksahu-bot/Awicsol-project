let txt=document.getElementById('ttx');

    var text = [" E-commerce", " Medical", " Tiktok"," WebApp"," and many more"];
    var cl = ["Red", " Yellow", "Green"," Blue","purple"];
    var counter = 0;
    setInterval(change, 1500);
    function change() {
        txt.style.color=`${cl[counter]}`;
     txt.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; }
    }