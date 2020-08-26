// 画面がロードされた時の処理をりすな登録
window.addEventListener("DOMContentLoaded", function(){
    // 入力エリアを取得
    let messageArea = document.getElementById("messageArea");
    // 入力エリアにinputリスナ登録
    messageArea.addEventListener("input", function() {
        // 入力された内容を取得
        let message = messageArea.value;
        // 入力された文字数を取得
        let messageLength = message.length;
        // 文字数表示要素を取得
        let showMessageLength = document.getElementById("showMessageLength");
        // 文字数を表示
        showMessageLength.textContent = messageLength + "/70";
        if(messageLength > 70){
            messageArea.classList.add("alertBg")
        } else {
            messageArea.classList.remove("alertBg")
        }
    });
});
