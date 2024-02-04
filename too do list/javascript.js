document.addEventListener("DOMContentLoaded",function PositionChange(){

    const main = document.querySelector('main');
    const TextCon = document.querySelector(".TextCon");
    const TagCon = document.querySelector('.Tag-con');
    const MonButton = document.querySelector(".MonButton");
    const TagButton = document.querySelector(".TagButton");
    
    MonButton.addEventListener("click", function () {
        main.style.left = "0%";
        TextCon.style.left = "0%";
        TagCon.style.left = "66.5%";
    });


    TagButton.addEventListener("click", function () {
        main.style.left = "-100%";
        TextCon.style.left = "-100%";
        TagCon.style.left = "0%";
    });






});



document.addEventListener("DOMContentLoaded",function CurrentData(){
    const h4 = document.querySelector("h4");
    const h3 = document.querySelector("h3");

    const Current = new Date();
    const Days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    
    const Day = Days[Current.getDay()];
    const date = Current.getDate();
    const monat = Months[Current.getMonth()];
    const year = Current.getFullYear();

    h3.textContent = `${monat}`;
    h4.textContent = `${date}, ${monat},${year}`;





});



