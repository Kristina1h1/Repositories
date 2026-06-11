let st = "Это пример строки с несколькими пробелами";
let reg = /\s+/g;

let result = st.replace(reg, "_");
console.log(result);
