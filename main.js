let body = document.querySelector("body")
let btn = document.querySelector("button")
btn.innerHTML = "start"

let sec = 0
let click = 0
let a
let b = 0
let random
btn.addEventListener("click",()=>{
    click ++
    if(click==1){
        btn.innerHTML = "ready"
        random = Math.round(Math.random()*3)+2
        body.style.backgroundColor = "black"
        btn.style.color = "red"
        btn.style.border = "solid 3px white"
        setTimeout(()=>{
            body.style.backgroundColor = "white"
            btn.style.backgroundColor = "black"
            btn.style.color = "white"
            btn.style.border = "solid 3px white"
            btn.innerHTML = "click"
            a = setInterval(()=>{
                sec+=0.01
            },10)
            btn.addEventListener("click",()=>{
                b ++
                if(b==1){
                    clearInterval(a)
                    btn.innerHTML = String(sec).slice(0,4)
                }
            })
        },random*1000)
    }
})
