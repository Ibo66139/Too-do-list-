document.addEventListener("DOMContentLoaded",function PositionChange(){

    const main = document.querySelector('main');
    const TextCon = document.querySelector(".TextCon");
    const TagCon = document.querySelector('.Tag-con');
    const MonButton = document.querySelector(".MonButton");
    const TagButton = document.querySelector(".TagButton");
    const CloseImg =document.getElementsByClassName("imgClose")[1];
    const CloseImg2 =document.getElementsByClassName("imgClose")[2];


    const UserImg = document.getElementById("User-img");
    const UserCon = document.querySelector(".User-con");

    const ClookImg = document.getElementById("Clook-img");
    const ClookCon = document.getElementsByClassName("Clook-con")[0];



    CloseImg2.addEventListener("click", function () {

        ClookCon.style.right = "100%";




    })

    ClookImg.addEventListener("click", function () {
        ClookCon.style.right = "0%";






    })

    
   


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


    let counter = 0;
    SaveButton.addEventListener("click", function () {
        const TextInput =document.getElementById("TextInput").value;
        const DateInput =document.getElementById("DateInput").value;
        const TextCon = document.querySelector(".TextCon");
        const TagCon = document.getElementById("Tag-con");
        const InfoPs = document.querySelectorAll(".Info-p");

        if (TextInput.trim() === "" || DateInput.trim() === "") {
            alert("Bitte füllen Sie alle erforderlichen Felder aus.");
            return;
        }
        
        
       
    
        let counter = 0; 

        
        InfoPs.forEach(element => {
            element.remove();
        });

        let TextBox = document.createElement('div');

        TextBox.classList.add('TextBox'); 

        TextBox.dataset.category = 'specific' + counter;

        

        TextBox.innerHTML = `
        <img src="img/verifiziert.png" class="img-textCon" >

        <p class="Text">${TextInput}</p>

        <button class="btn">
        <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
        <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
        </svg>
        </button>

        <p class="Datum">${DateInput}</p>
        `;

        const TextBoxClone = TextBox.cloneNode(true);

        TextCon.appendChild(TextBox);
        TagCon.appendChild(TextBoxClone);

      













    })

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("img-textCon")) {
            let textBox = event.target.closest(".TextBox");
            let button = textBox.querySelector(".btn");
            let datum = textBox.querySelector(".Datum");
    
            if (event.target.src.includes("img/verifiziert.png")) {
                button.style.display = "block";
                event.target.src = "img/verifiziertgrenn.png";
                datum.style.display = "none";
            } else {
                button.style.display = "none";
                event.target.src = "img/verifiziert.png";
                datum.style.display = "block";
            }
        }
    });
    
    
          
    
    
                    
                    
                    
                    
                
            
});

   
    
    


document.addEventListener("DOMContentLoaded", function DarkMode() {
    const Button = document.getElementById('inputmode');
    const TextCon = document.querySelector(".TextCon");
    const Tabel = document.getElementById("table");
    const TagCon = document.querySelector('.Tag-con');
    const ToDooList = document.querySelector('.ToDoList');
    const AddCon = document.querySelector(".add-con");
    const UserCon = document.querySelector(".User-con");
    const body = document.querySelector("body");
    const ClookCon = document.getElementsByClassName("Clook-con")[0];
    const HistoryCon = document.getElementsByClassName("History-con")[0];

    Button.addEventListener("click", function() {

        
        if (Button.checked) {
            TextCon.style.backgroundColor = "#333";
            Tabel.style.backgroundColor = "#333";
            TagCon.style.backgroundColor = "#333";
            ToDooList.style.backgroundColor = "#222";
            AddCon.style.backgroundColor = "#222";
            UserCon.style.backgroundColor = "#333";
            body.style.color = "#fff";
            ClookCon.style.backgroundColor = "#333";
            HistoryCon.style.backgroundColor = "#333";




    
        } else {
            TextCon.style.backgroundColor = "#fff";
            Tabel.style.backgroundColor = "#fff";
            TagCon.style.backgroundColor = "#fff";
            ToDooList.style.backgroundColor = "#f4f4f4";
            AddCon.style.backgroundColor = "#f4f4f4";
            UserCon.style.backgroundColor = "#fff";
            body.style.color = "black";
            ClookCon.style.backgroundColor = "#fff";
            HistoryCon.style.backgroundColor = "#fff";


        }


        
    });


    document.getElementById("SaveButton").addEventListener("click", function() {
        let Button = document.getElementById('inputmode');
        let TextBoxes = document.querySelectorAll('.TextBox');
    
        TextBoxes.forEach(function(TextBox) {
            if (Button.checked) {
                TextBox.style.backgroundColor = "#333";
            } else {
                TextBox.style.backgroundColor = "#fff";
            }
        });
    });
    





    Button.addEventListener("click", function() {

        let TextBox = document.querySelectorAll(".TextBox");

        if (Button.checked) {
           
            TextBox.forEach(TextBox => {
                TextBox.style.backgroundColor = "#333";
            });
        } else {
           
            TextBox.forEach(TextBox => {
                TextBox.style.backgroundColor = "#fff";
            });
        }
    });












});












    






