const factText = document.querySelector(".fact")
const factButton = document.querySelector(".new-fact")
const speechButton = document.querySelector(".speech")
const copyButton = document.querySelector(".copy")
const tweetButton = document.querySelector(".twitter")
const synth = speechSynthesis

async function randomFact() {
    factButton.classList.add("loading")
    factButton.innerText = "Loading..."
    const key = "69a4b5e576mshf422956d6c608b2p1133d8jsnbe0791660dc7"
    const host = "cat-facts12.p.rapidapi.com"
    const url = 'https://cat-facts12.p.rapidapi.com/Fact';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        factText.innerText = result.Fact
        // console.log(result);
        factButton.classList.remove("loading");
        factButton.innerText = "New Fact"
    } catch (error) {
        console.error(error);
    }
}

speechButton.addEventListener("click", () => {
    if (!factButton.classList.contains("loading")) {
        let utterance = new SpeechSynthesisUtterance(`${factText.innerText}`);
        synth.speak(utterance);
        setInterval(() => {
            !synth.speaking ? speechButton.classList.remove("active") : speechButton.classList.add("active");
        }, 10);
    }
})

copyButton.addEventListener("click", () => { navigator.clipboard.writeText(factText.innerText) })

tweetButton.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${factText.innerText}`;
    window.open(tweetUrl, "_blank");
});

factButton.addEventListener('click', randomFact)