// 画面がロードされたタイミングで行う処理
window.onload = function() {
    // ドロップダウン要素を取得
    let paymentSelect = document.getElementById("paymentSelect");
    // ドロップダウン要素が変更されたタイミングで行う処理
    paymentSelect.onchange = function() {
        // 選択されたvalueを取得
        let paymentSelectStr = paymentSelect.value;
        // 取得したvalueを数値に変更
        let paymentSelectInt = Number(paymentSelectStr);

        // 手数料表示用の文字列を表示
        let paymentSelectResultStr = "手数料："
        // 取得したvalue値に応じて処理を分岐
        switch(paymentSelectInt) {
            case 1:
                paymentSelectResultStr += "432";
                break;
            case 2:
                paymentSelectResultStr += "11";
                break;
            case 3:
                paymentSelectResultStr += "222";
                break;
            case 4:
                paymentSelectResultStr += "333";
                break;
            default:
                paymentSelectResultStr = "";
        }
        // 手数料を表示する要素
        let paymentSelectResult = document.getElementById("paymentSelectResult");
        paymentSelectResult.textContent = paymentSelectResultStr

    };
}
