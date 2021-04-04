let reviews = document.querySelectorAll(".review");
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");


reviews.forEach((review , index)=>{
   review.style.left= `${index * 100}%`;
});

let counter = 0;

leftBtn.addEventListener("click", ()=>{
    counter--;
    rotation();
})

rightBtn.addEventListener("click", ()=>{
    counter++;
    rotation();

})

function rotation(){
    if(counter == reviews.length){
        counter =0;
    }

    if(counter < 0){
        counter = reviews.length-1;
    }

reviews.forEach((review)=>{
    review.style.transform = `translateX(-${counter*100}%)`;
});

}


let navi = document.querySelector(".navigation-list");

window.addEventListener("scroll",()=>{
    let base = window.pageYOffset;

    if(base > 250){
        navi.classList.add("show");
    }
    else{
        navi.classList.remove("show");
    }

})

let servBtns = document.querySelectorAll(".service-button");
let crosses = document.querySelectorAll(".cross");

servBtns.forEach((servBtn)=>{
    servBtn.addEventListener("click",(e)=>{
        let container = e.currentTarget.nextElementSibling;
        container.classList.add("open");
    });
})

crosses.forEach((cross)=>{
    cross.addEventListener("click",(e)=>{
        let close = e.currentTarget.parentElement.parentElement;
        close.classList.remove("open");
    });
})

let container = document.querySelector(".tab-container");
let tabs = document.querySelectorAll(".tab-name");
let boxes = document.querySelectorAll(".tab-box");


container.addEventListener("click", (e)=>{
   let id = e.target.dataset.link;
    if(id){
        tabs.forEach((tab)=>{
            tab.classList.remove("rev-n");
            e.target.classList.add("rev-n");
        });
        boxes.forEach((box)=>{
        box.classList.remove("rev-b");
        });
        const trait = document.getElementById(id);
        trait.classList.add("rev-b");
    }
});

let tcontain = document.querySelector(".toys-container");
let toys = document.querySelectorAll(".toy");
let texts = document.querySelectorAll(".t-box");

tcontain.addEventListener("click",(e)=>{
    let pup = e.target.parentElement.dataset.t;
    if(pup){
        toys.forEach((toy)=>{
            toy.classList.remove("active");
            e.target.parentElement.classList.add("active");
        });

        texts.forEach((text)=>{
            text.classList.remove("active");
        });
        let reveal = document.getElementById(pup);
        reveal.classList.add("active");
    }
})

let links = document.querySelectorAll(".link");

links.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        let id = e.target.getAttribute("href").slice(1);
        let spot = document.getElementById(id)
        let location = spot.offsetTop;
        window.scrollTo({
            top:location -80,
            left:0
        })
        event.preventDefault();
    });
});