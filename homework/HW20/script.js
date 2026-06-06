let spans = document.querySelectorAll("span");

for(let i =0; i<spans.length; i++){
    // spans[i].addEventListener("click", function(){
    //     this.parentNode.remove();
    // })
    spans[i].addEventListener("click",() => {
        spans[i].parentNode.remove();
    })
}