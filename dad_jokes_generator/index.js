const btnE1 = document.getElementById("btn")
const jokeEl = document.getAnimations("joke")

const apiKey = "EdqZV9vs0IJinu7FUvM8UA==khLsd6tgMXWIktr5"

const options = {
    method: "GET",
    headers: {
        "X-Api_key": apiKey,
    },
}

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke() {
    try {
        jokeEl.innerText = "updating...";
        btnEl.disabled = true;
        btnE1.innerText = "Loading ..";
       const response = await fetch(apiURL, options);
       const data = await response.json();
    
       btnEl.disabled = false;
       btnE1.innerText = "Tell me a joke";
    
       jokeEl.innerText = data[0].joke;
    } catch (error) {
        console.log(error);
        joke.innerText = "An error happened, try again later";

        btnEl.disabled = false;
        btnE1.innerText = "Tell me a joke";
    }
}

btnE1.addEventListener("click", getJoke)