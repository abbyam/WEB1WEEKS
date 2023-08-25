document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const userInput = document.getElementById("user-input");
    const buttons = document.querySelectorAll(".btn");

    const restaButton = document.getElementById("resta");
    const sumaButton = document.getElementById("suma");
    const divisionButton = document.getElementById("division");
    const equalsButton = document.getElementById("btigual");

   

    restaButton.addEventListener("click", () => {
        display.value += "-";
        userInput.textContent = display.value;
    });

    sumaButton.addEventListener("click", () => {
        display.value += "+";
        userInput.textContent = display.value;
    });

    divisionButton.addEventListener("click", () => {
        display.value += "÷";
        userInput.textContent = display.value;
    });

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if (buttonText === "C") {
                display.value = "";
                userInput.textContent = "";
            } else if (buttonText === "-" || buttonText === "+" || buttonText === "%" || buttonText === "=") {
                // No actualizamos el display superior para estos botones
            } else {
                display.value += buttonText;
                userInput.textContent = display.value;
            }
        });
    });
    equalsButton.addEventListener("click", () => {
        try {
            const result = math.evaluate(display.value);
            display.value = result;
            userInput.textContent = result;
        } catch (error) {
            display.value = "Error";
            userInput.textContent = "Error";
        }
    });
});


   
