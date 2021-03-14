function dummyFetch(path, callback) {
  setTimeout(() => {
    if (path.startsWith("/success")) {
      callback(null, {body: `Response body of ${path}`});
    } else {
      callback(new Error("NOT FOUND"));
    }
  }, 1000 * Math.random());
}

dummyFetch("/success/data", (error, response) => {
  if (error) {
    // この行は実行されない
  } else {
    console.log(response);
  }
});
