// document.writeln("aaa".replace("a", "b") + "<br>");
// document.writeln("aaa".replace(/a/g, "b") + "<br>");

// let text = "I kill you black dog";
// document.writeln(text + "<br>");
// let exp = /book|kill|black/ig;
// text = text.replace(exp, "***");
// document.writeln("<p>" + text + "</p>");

// let st = "<p>Hello world</p>";
// let reg = /<.+?>/g;

// let st = "131231564";
// let reg = /\d{2,4}?/g;
// console.log(st.match(reg));
/* 
*?, +?, ??
{2,4}?, {2,}?, {2}?
*/

// let st = "<p>Hello world</p>";
// let reg = /<[^>]+>/g;
// console.log(st.match(reg));

// let st = "... <!-- My -- comment text --> .. <!----> ..";
// // let reg = /<[^>]+>/g;
// let reg = /<!--.*-->/g;
// alert(st.match(reg)); // <!-- My -- comment text -->, <!---->

// let st = "<> <a href='#'> <input type='radio' checked> <b>";
// let reg = /<[^>]+>/g;
// alert(st.match(reg)); // <a href='#'>, <input type='radio' checked>, <b>

// let html = "Дмитрий Васильев";
// let exp = /(Дмитрий) Васильев/;
// document.writeln(html.match(exp) + "<br>");


// let html = "site.com и my.site.com";
// let exp = /(\w+\.)+\w+/g;
// document.writeln(html.match(exp) + "<br>");

// let st = "<h1>Hello, world!</h1>";
// let tag = st.match(/<(.*?)>/);
// alert(tag[0]);
// alert(tag[1]);

// let date = "2026-05-30";
// let reg = /^(\d{4})-(\d{2})-(\d{2})$/;
// let match = date.match(reg);
// let format = match[3] + "." + match[2] + "." + match[1];
// console.log(format);  // 30.05.2026

// let st = "<span class='my'>";
// let exp = /<(([a-z]+)\s*([^>]*))>/;
// let res = st.match(exp);
// alert(res[3]);

// let date = "2026-05-30 2026-10-15";
// let reg = /(?<year>[0-9]{4})-(?<month>\d{2})-(?<day>\d{2})/g;
// // let match = date.match(reg).groups;
// // let format = match[3] + "." + match[2] + "." + match[1];
// // // console.log(format);  // 30.05.2026
// // console.log(match.day + "." + match.month + "." + match.year);
// let res = date.matchAll(reg);
// console.log(res);

// for(let result of res){
//     let {year, month, day} = result.groups;

//     document.writeln(`${day}.${month}.${year}`);
    
// }

// let st = "-1.5 0 2 -123.4."
// let reg = /-?\d+(\.\d+)?/g;
// document.writeln(st.match(reg));  // -1.5,0,2,-123.4