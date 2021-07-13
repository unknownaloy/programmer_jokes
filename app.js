const jokeText = document.getElementById("joke");

const jokeBtn = document.getElementById("jokeBtn");

const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const generateJokes = async () => {
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist");

    const data = await res.json();
    console.log(data);

    let joke = "";
    if (data.joke == undefined) {
        joke = `${data.setup} <br /> ${data.delivery}`
    } else {
        joke = data.joke
    }

    jokeText.innerHTML = joke;
};

jokeBtn.addEventListener("click", generateJokes);