let but = document.querySelector("#cl");
        but.addEventListener("click", myMove);
        let flag = false;
        let elem = document.getElementById("animate");
        let pos = 0;
        let id, id2;

        function myMove() {
            if (!flag) {
                pos = 0;
                id = setInterval(frame, 8);
            } else {
                pos = 350;
                id2 = setInterval(reverse, 8);
            }
            flag = !flag;
        }

        function frame() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }

        function reverse() {
            if (pos == 0) {
                clearInterval(id2);
            } else {
                pos--;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }