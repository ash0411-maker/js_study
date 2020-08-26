function onFreeWordButtonClick() {
    let freeWordInput = document.getElementById("freeWordInput");
    freeWordInputValue = freeWordInput.value;
    freeWordInputName = freeWordInput.getAttribute("name");

    let showInput = document.getElementById("showInput");
    showInput.textContent = "name属性が" + freeWordInputName + "の入力された値：" + freeWordInputValue;
}



// console.log();
// nums[i] = Math.round(Math.random() * 100);