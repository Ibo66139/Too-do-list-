document.addEventListener("DOMContentLoaded",function PositionChange(){

    const main = document.querySelector('main');
    const TextCon = document.querySelector(".TextCon");
    const TagCon = document.querySelector('.Tag-con');
    const MonButton = document.querySelector(".MonButton");
    const TagButton = document.querySelector(".TagButton");
    const CloseImg =document.getElementsByClassName("imgClose")[1];

    const UserImg = document.getElementById("User-img");
    const UserCon = document.querySelector(".User-con");
    
   


    MonButton.addEventListener("click", function () {
        main.style.left = "0%";
        TextCon.style.left = "0%";
        TagCon.style.left = "100%";
    });


    TagButton.addEventListener("click", function () { 
        main.style.left = "-100%";
        TextCon.style.left = "-100%";
        TagCon.style.left = "0%";
    });


    
    
    
  
    UserImg.addEventListener("click", function() { 
        UserCon.style.left = "0%";
    });

    CloseImg.addEventListener("click", function() { 
        UserCon.style.left = "100%";
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
    const ImgVerifiziert = document.querySelectorAll(".img-textCon");
    

    AddImg.addEventListener("click", function () {
        AddCon.style.top = "30%";
    })

    CloseImg.addEventListener("click", function () {
        AddCon.style.top = "110%";
    })

    SaveButton.addEventListener("click", function () {
        AddCon.style.top = "110%";
    })



    SaveButton.addEventListener("click", function () {
        const TextInput =document.getElementById("TextInput").value;
        const DateInput =document.getElementById("DateInput").value;
        const TextCon = document.querySelector(".TextCon");
        const TagCon = document.getElementById("Tag-con");
        const InfoPs = document.querySelectorAll(".Info-p");
        
      

        InfoPs.forEach(element => {
            element.remove();
        });

        const TextBox = document.createElement('div');

        TextBox.classList.add('TextBox'); 
        TextBox.id = ('TextBox');

        

        
   

        TextBox.innerHTML = `
        <img src="/too do list/img/verifiziert.png" class="img-textCon" >
        <p class="Text">${TextInput}</p>
        <p class="Datum">${DateInput}</p>
    `;

    const TextBoxClone = TextBox.cloneNode(true);

    TextCon.appendChild(TextBox);
    TagCon.appendChild(TextBoxClone);

    



    })

    document.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG" || event.target.nodeName === "IMG") {
            if (event.target.classList.contains("img-textCon")) {
                    event.target.src = "/too do list/img/verifiziertgrenn.png"; 

                    const clonedDiv = document.querySelector(".TextBox"); 
                    const clonedImgs = clonedDiv.querySelector(".img-textCon"); 
        
                    const TagCon = document.getElementById("Tag-con");
        
                    TagCon.querySelectorAll(".img-textCon")[0].setAttribute("src", "/too do list/img/verifiziertgrenn.png");
        
                    const nextImg = TagCon.querySelectorAll(".img-textCon")[1];


                    
                    
                    if (nextImg) {

                        nextImg.querySelectorAll(".img-textCon")[1];

                    } else {
                        console.log("Es gibt kein weiteres Bild.");

                    }
                    
                    
                    
                
            }
        }
    });

   
    
    
    
});

document.addEventListener("DOMContentLoaded", function() {
    const Button = document.getElementById('inputmode');
    const TextCon = document.querySelector(".TextCon");
    const Tabel = document.getElementById("table");
    const TagCon = document.querySelector('.Tag-con');
    const TooDooList = document.querySelector('.TooDoList');
    const AddCon = document.querySelector(".add-con");
    const UserCon = document.querySelector(".User-con");
    const body = document.querySelector("body");

    Button.addEventListener("click", function() {
        if (Button.checked) {
            TextCon.style.backgroundColor = "#333";
            Tabel.style.backgroundColor = "#333";
            TagCon.style.backgroundColor = "#333";
            TooDooList.style.backgroundColor = "#222";
            AddCon.style.backgroundColor = "#222";
            UserCon.style.backgroundColor = "#333";
            body.style.color = "#fff";
            
        } else {
            TextCon.style.backgroundColor = "#fff";
            Tabel.style.backgroundColor = "#fff";
            TagCon.style.backgroundColor = "#fff";
            TooDooList.style.backgroundColor = "#f4f4f4";
            AddCon.style.backgroundColor = "#f4f4f4";
            UserCon.style.backgroundColor = "#fff";
            body.style.color = "black";
        }
    });
});





