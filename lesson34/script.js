// let box = document.querySelector(".box");
// // let width = box.clientWidth;
// // let height = box.clientHeight;
// // let width = box.offsetWidth;
// // let height = box.offsetHeight;
// let width = box.scrollWidth;
// let height = box.scrollHeight;

// // console.log(width, height);
// let hh = box.offsetHeight;
// let flag;

// document.querySelector("button").addEventListener("click", function () {
//     /*  if (!flag) {
//             box.style.height = box.scrollHeight + "px";                
//         } else {
//             box.style.height = hh + "px";  
//         }
//         flag = !flag; */
//     // console.log(box.scrollTop);
//     console.log(box.getBoundingClientRect());
//     console.log(box.getBoundingClientRect().top);
//     console.log("offsetTop", box.offsetTop);


//     if(!flag){
//         box.style.overflow = "hidden";
//     } else {
//         box.style.overflow = "";
//     }
//     flag = !flag;

// })




/* window.addEventListener("scroll", myFunction);

function myFunction() {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = winScroll / height * 100;

    document.querySelector("#myBar").style.width = scrolled + "%";

    document.querySelector("img").style.transform = "translate(" + (document.documentElement.clientWidth - 94) * scrolled / 100 + "px, 0px)";
}

let win = null;

let open = document.querySelector("#show");
open.addEventListener("click", function () {
    // window.open("https://yandex.com");
    win = window.open(
        "str.html",
        "new_window",
        "width=420,height=220,left=200,top=200,resizable=yes"
    );
    console.log(win);

});

let cls = document.querySelector("#close");
cls.addEventListener("click", function () {
    if (typeof win == "object") {
        win.close();
    }
}) */