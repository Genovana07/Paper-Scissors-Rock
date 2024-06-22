const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
comResult = document.querySelector(".com_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click",(e) => {
        image.classList.add("active");
 
        optionImages.forEach((image2, index2) => {

            index !== index2 && image2.classList.remove("active");
        });

        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;


        let randomNumber = Math.floor(Math.random() * 3);

        let comImages = ["bato-removebg-preview.png", "papel-removebg-preview.png", "gunting-removebg-preview.png"];

        comResult.src = comImages[randomNumber];

        let comValue = ["R", "P", "S"][randomNumber];
        let userValue = ["R", "P", "S"][index];

        let outcomes = {
            RR: "Draw",
            RP: "Com",
            RS: "User",
            PP: "Draw",
            PR: "Com",
            PS: "User",
            SS: "Draw",
            SR: "Com",
            SP: "User",
        };

        let outComeValue = outcomes[userValue + comValue];
        result.textContent = userValue === comValue ? "Match Draw" : [outComeValue] ;


       
       
        
    }); 
});