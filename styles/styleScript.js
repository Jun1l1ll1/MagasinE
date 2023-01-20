
console.log("%cGod Dag!", "color:green;background-color:yellow;font-size:30px;")






function tilTopps() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Endre 0 om man ønsker å endre hvor den ender
}











// * ************* Søking ***************


let sokOn = false
function visSokBox(e) {
    let sBox = document.getElementById(e);
    let inp = document.getElementsByClassName('sokInp');
    if (sokOn == false) {
        sBox.style.display = "block";
        sokOn = true
    } else {
        sBox.style.display = "none";
        fjernSokInp();
        sokOn = false
    }
}



let sokBoxs = document.getElementsByClassName('sokBox');
document.addEventListener('keyup', (e) => {
    if ((e.key == "Enter") && ((sokBoxs[0].style.display != 'none') || (sokBoxs[1].style.display != 'none'))) {
        sokBoxs[0].style.display = 'none';
        sokBoxs[1].style.display = 'none';
        sokOn = false;
        sokEtter();
    }
});

function sokEtter() {
    let inp = document.getElementsByClassName('sokInp');
    if (inp[0].value != '') {
        console.log(`SkrollMeny: ${inp[0].value}`)
    }
    else if (inp[1].value != '') {
        console.log(`OverMeny: ${inp[1].value}`)
    }
    fjernSokInp();
}


function fjernSokInp() {
    let inp = document.getElementsByClassName('sokInp');
    for (let i = 0; i < inp.length; i++) {
        inp[i].value = '';
    }
}












function getPos(id) { // Fungerer ikke med visFolgeMeny()
    var target = document.getElementById(id);

    return target.offsetTop;
}











function visFolgeMeny() {
    let skMeny = document.getElementById("skrollMeny");

    if (315 < this.scrollY) {
        skMeny.className = "synlig";
    } else {
        skMeny.className = "usynlig";
    }
}











let hamOn = false;
function hamMeny() {
    let meny = document.getElementsByClassName("darkenScreen");
    let hamE = document.getElementsByClassName("hamMenyE");
    let hamX = document.getElementsByClassName("hamMenyX");

    if (!hamOn) {
        hamE[0].style.display = "none";
        hamE[1].style.display = "none";
        hamX[0].style.display = "block";
        hamX[1].style.display = "block";

        meny[0].style.display = "block";
        hamOn = true;
    } 
    else{
        hamE[0].style.display = "block";
        hamE[1].style.display = "block";
        hamX[0].style.display = "none";
        hamX[1].style.display = "none";

        meny[0].style.display = "none";
        hamOn = false;
    }
}
document.addEventListener('keydown', (e) => {
    if ((e.key == "Escape") && (hamOn == true)) {
      hamMeny();
    }
});














function katLeft() {
    let katGrid = document.getElementById("moveMeOnArrowClick");
    let katPos = katGrid.style.left;

    let lArr = document.getElementById("leftArrowImg");
    let lArrC = document.getElementById("leftArrowImgClosed");

    let rArr = document.getElementById("rightArrowImg");
    let rArrC = document.getElementById("rightArrowImgClosed");

    if (katPos != "") { // Ikke er på Bakka
        if (katPos == "-110vw") { // Er på Krea.
            katGrid.style.left = "-55vw";
            document.getElementById("onKat").id = "kKat";
            document.getElementById("sKat").id = "onKat";

            rArr.style.display = "block";
            rArrC.style.display = "none";
        } 
        else if (katPos == "-55vw") { // Er på Samf.
            katGrid.style.left = "";
            document.getElementById("onKat").id = "sKat";
            document.getElementById("bKat").id = "onKat";

            lArr.style.display = "none";
            lArrC.style.display = "block";
            
        } 
    }
}
function katRight() {
    let katGrid = document.getElementById("moveMeOnArrowClick");
    let katPos = katGrid.style.left;
    
    let lArr = document.getElementById("leftArrowImg");
    let lArrC = document.getElementById("leftArrowImgClosed");

    let rArr = document.getElementById("rightArrowImg");
    let rArrC = document.getElementById("rightArrowImgClosed");

    if (katPos != "-110vw") { // Ikke er på Krea.
        if (katPos != "-55vw") { // Er på På Bakka
            katGrid.style.left = "-55vw";
            document.getElementById("onKat").id = "bKat";
            document.getElementById("sKat").id = "onKat";

            lArr.style.display = "block";
            lArrC.style.display = "none";
        } 
        else if (katPos == "-55vw") { // Er på Samf.
            katGrid.style.left = "-110vw";
            document.getElementById("onKat").id = "sKat";
            document.getElementById("kKat").id = "onKat";

            rArr.style.display = "none";
            rArrC.style.display = "block";
        } 
    }
}
