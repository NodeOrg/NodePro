

const buffer = Buffer.from("nodejs测试", "ascii");
let data = buffer.toString("hex");
console.log("Encoding-hex:" + data);

data = buffer.toString("utf8");
console.log("Encoding-UTF8:" + data);

data = buffer.toString("base64");
console.log("Encoding-base64 :" + data);
