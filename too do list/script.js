document.addEventListener("DOMContentLoaded",function PositionChange(){

    const main = document.querySelector('main');
    const TextCon = document.querySelector(".TextCon");
    const TagCon = document.querySelector('.Tag-con');
    const MonButton = document.querySelector(".MonButton");
    const TagButton = document.querySelector(".TagButton");

    
   


    MonButton.addEventListener("click", function () {
        main.style.left = "0%";
        TextCon.style.left = "0%";
        TagCon.style.left = "100%";
    });


    TagButton.addEventListener("click", function () { 
        main.style.left = "-100%";
        TextCon.style.left = "-100%";
        TagCon.style.left = "8%";
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





document.addEventListener("DOMContentLoaded",function addFunction(){

    const AddCon =document.getElementsByClassName("add-con")[0];
    const CloseImg =document.getElementsByClassName("imgClose")[0];
    const AddImg =document.getElementById("add-img");
    const SaveButton =document.getElementById("SaveButton");
    

    AddImg.addEventListener("click", function () {

        AddCon.style.top = "30%";
        






        


    })

    CloseImg.addEventListener("click", function () {

        AddCon.style.top = "110%";


    })



    SaveButton.addEventListener("click", function () {
        const TextInput =document.getElementById("TextInput").value;
        const DateInput =document.getElementById("DateInput").value;
        const TextCon = document.querySelector(".TextCon");
        
        const Info =document.getElementById("Info");

        if (Info) {
            Info.remove();
        }

        const TextBox = document.createElement('div');

        TextBox.classList.add('TextBox'); 
        TextBox.id = ('TextBox');

        

        
   

        TextBox.innerHTML = `
        <img src="/too do list/img/verifiziert.png">
        <p class="Text">${TextInput}</p>
        <p class="Datum">${DateInput}</p>
    `;

    
    TextCon.appendChild(TextBox);


    



    })
















});