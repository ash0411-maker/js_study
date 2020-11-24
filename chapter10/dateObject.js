let jobs = new Date(2011, 0, 5);

// 命日を文字列にして整形
console.log("ジョブズの命日は" + jobs.toDateString());
console.log("ジョブズの命日は" + jobs.toLocaleDateString());


let month = jobs.getMonth();
jobs.setMonth(month + 1);
console.log("1ヶ月後" + jobs.toLocaleDateString());