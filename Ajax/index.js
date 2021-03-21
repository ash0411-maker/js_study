// console.log("index.js: loaded")

// const heading = document.querySelector("h2");
// const headingText = heading.textContent;

// const button = document.createElement("button");
// button.textContent = "Push Me!!!";
// document.body.appendChild(button);


// Fetch
const p_text = document.querySelector("p");
const userId = "js-primer-example";
function fetchUserInfo(userId) {
fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
  .then(response => {
    console.log(response.status);
    // エラーレスポンスが返されたことを検知する
    if (!response.ok) {
      console.error("エラーレスポンス", response);
    } else {
      return response.json().then(userInfo => {
        console.log(userInfo);
        p_text.textContent = userInfo.login
      });
    }
  }).catch(error => {
    console.error(error);
  });
}
