const factText = document.querySelector(".fact")
const factButton = document.querySelector(".new-fact")
const speechButton = document.querySelector(".speech")
const copyButton = document.querySelector(".copy")
const tweetButton = document.querySelector(".twitter")

async function randomFact() {
    factButton.classList.add("loading")
    factButton.innerText = "Loading..."
    const url = 'https://cat-facts12.p.rapidapi.com/Fact';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '69a4b5e576mshf422956d6c608b2p1133d8jsnbe0791660dc7',
            'X-RapidAPI-Host': 'cat-facts12.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        factText.innerText = result[0]
        console.log(result);
        factButton.classList.remove("loading");
        factButton.innerText = "New Fact"
    } catch (error) {
        console.error(error);
    }
}

factButton.addEventListener('click', randomFact)