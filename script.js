const birthdayButton = document.getElementById("birthdayButton");

const terminalBody = document.querySelector(".terminal-body");

birthdayButton.addEventListener("click", function () {

    birthdayButton.disabled = true;

    terminalBody.innerHTML = "";

    const messages = [
        "> Launching BIRTHDAY.EXE...",
        "> Initializing birthday protocol...",
        "> Scanning user profile...",
        "> Verifying birthday...",
        "> Birthday confirmed.",
        "> Preparing celebration module...",
        "> System authorization granted."
    ];

    let index = 0;

    function showNextMessage() {

        if (index < messages.length) {

            const message = document.createElement("p");

            message.textContent = messages[index];

            terminalBody.appendChild(message);

            index++;

            setTimeout(showNextMessage, 700);

        } else {

            showBirthdayMessage();

        }

    }

    showNextMessage();

});


function showBirthdayMessage() {

    const message = document.createElement("p");

    message.textContent = "🎂 HAPPY BIRTHDAY! 🎂";

    message.style.color = "#ffffff";

    message.style.fontSize = "18px";

    message.style.marginTop = "20px";

    terminalBody.appendChild(message);

}