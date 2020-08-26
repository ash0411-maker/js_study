function onTagButtonClick() {
    // タグ名がbunttonのものを取得
    let buttonTags = document.getElementsByTagName("button");
    let result = "";
    for(let i = 0; i < buttonTags.length; i++){
        result += buttonTags[i].textContent + "：";
    }

    let resultP = document.getElementById("result");
    resultP.textContent = result;
}




function onClassButtonClick() {
    let redElements = document.getElementsByClassName("redText");
    let result = "";
    for(let i = 0; i < redElements.length; i++){
        result += redElements[i].textContent + "：";
    }

    let resultP = document.getElementById("result");
    resultP.textContent = result;
}



function onNameButtonClick() {
    let checkBoxes = document.getElementsByName("skill");
    let result = "";
    for(let i = 0; i < checkBoxes.length; i++){
        if(checkBoxes[i].checked){
            result += checkBoxes[i].value + ",";;
        }
    }

    let resultP = document.getElementById("result");
    resultP.textContent = result;
}
