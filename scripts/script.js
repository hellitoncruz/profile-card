const cancel = document.querySelector(".cancel");
const arrow = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");


arrow.addEventListener("click", ()=>{
    arrow.classList.add("active_arr");
    if(left_container.classList.contains("off")){
        left_container.classList.remove("off");
        left_container.classList.add("active");

    }
});
cancel.addEventListener("click", ()=>{
    arrow.classList.remove("active_arr");
    if(left_container.classList.contains("active")){
        left_container.classList.remove("active");
        left_container.classList.add("off")
    }
});