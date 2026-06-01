// Menú principal de pociones

const mainButton = document.querySelector(".dropdown-main");

const mainMenu = document.querySelector(".submenu");

mainButton.addEventListener("click", () => {

    if(mainMenu.style.display === "block"){

        mainMenu.style.display = "none";

    }else{

        mainMenu.style.display = "block";

    }

});


// Menús de cada mundo

const worldButtons = document.querySelectorAll(".dropdown-world");

worldButtons.forEach(button => {

    button.addEventListener("click", () => {

        const worldMenu = button.nextElementSibling;

        if(worldMenu.style.display === "block"){

            worldMenu.style.display = "none";

        }else{

            worldMenu.style.display = "block";

        }

    });

});