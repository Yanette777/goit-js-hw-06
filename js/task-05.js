const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) =>{
    event.preventDefault();
    const inputName = event.target.value;
outputRef.textContent = inputName.length === 0 ? "Anonymous" : inputName;
}
);