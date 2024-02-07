let progress = document.querySelector(".progress")
let circle = document.querySelector(".circle")
let scrolled_From_Top;
let total_Height_Of_WebPage;
let viewing_Height_Of_Window;
let scrolled_Percentage;


window.addEventListener("scroll", () =>{
    scrolled_From_Top = window.scrollY;
    total_Height_Of_WebPage = document.documentElement.scrollHeight;
    viewing_Height_Of_Window = document.documentElement.clientHeight;

    scrolled_Percentage = Math.round((scrolled_From_Top/(total_Height_Of_WebPage - viewing_Height_Of_Window)) * 100);
    console.log(scrolled_Percentage);

    if(scrolled_From_Top > 50){
        progress.style.display = "flex";
    }
    else{
        progress.style.display = "none";
    }

    progress.style.background = `conic-gradient(#560bad ${scrolled_Percentage}%, #f0e6ef ${scrolled_Percentage}%)`

})

circle.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})


