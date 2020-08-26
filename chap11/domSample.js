function onH1ButtonClick() {
    let headTitle = document.getElementById("headTitle");
    console.log(headTitle);

    let headTitleText = headTitle.textContent;
    console.log(headTitleText);
}



function onH1AltButtonClick(){
    let headTitle = document.getElementById("headTitle");
    headTitle.textContent = "idによる取得"
}



// console.log();
// nums[i] = Math.round(Math.random() * 100);