const getColor = () => {

    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber, randomCode);
    // console.log();
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode);
}

// Event Call
const btn = document.getElementById("btn");
btn.addEventListener("click", getColor);


// Initial Call
getColor();