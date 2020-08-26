function onP2RedButton() {
    let showText = document.getElementById("showText");
    showText.setAttribute("class", "redText");
}



function onP2RDefaultButton() {
    let showText = document.getElementById("showText");
    showText.removeAttribute("class");
}



// console.log();
// nums[i] = Math.round(Math.random() * 100);