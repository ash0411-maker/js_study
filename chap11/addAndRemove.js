function onAddListItemButtonClick() {
    let addListItemInput = document.getElementById("addListItemInput");
    let addListItemInputText = addListItemInput.value;

    let listItem = document.createElement("li");
    listItem.textContent = addListItemInputText;
    listItem.classList.add("blueText");

    let skillList = document.getElementById("skillList");
    skillList.appendChild(listItem);
}


function onRemoveListItemButtonClick() {
    let skillList = document.getElementById("skillList");
    skillList.removeChild(skillList.lastElementChild);
}


function onAddLinkButtonClick() {
    // 入力欄からURLを取得
    let addLinkUrlText = document.getElementById("addLinkUrl").value;
    // 入力欄からリンク名を取得
    let addLinkNameText = document.getElementById("addLinkName").value;
    // aタグ文字列作成
    let addHtml = "<a href = \"" + addLinkUrlText + "\">" + addLinkNameText + "</a>";

    let addLink = document.getElementById("addLink");
    addLink.innerHTML = addHtml;
}