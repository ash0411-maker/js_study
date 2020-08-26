function onCheckAllChanged() {
    let checkAll = document.getElementById("checkAll");
    if(checkAll.checked){
        checkAll.nextSibling.textContent = "全て外す";
    } else {
        checkAll.nextSibling.textContent = "全てをチェック";
    }

    let checkBoxes = document.getElementsByName("skill");
    for(let i=0; i < checkBoxes.length; i++){
        checkBoxes[i].checked = checkAll.checked
    }
}
