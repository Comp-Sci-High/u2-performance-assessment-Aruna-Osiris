let user = prompt("Enter your name: ")

let requestURL = "https://animechan.io/api/v1/quotes/random"

async function animeAPI(name) {
    const response = await fetch(requestURL + name)
    const data = await response.json()
    console.log(data.data)
}
animeAPI()
 

//OPENAI
const url = "https://api.openai.com/v1/images/generations"

async function generateImage(promptData) {
    const apiKey = "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"
    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + apiKey,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(promptData),
    }
    const response = await fetch(url, options)
    const data2 = await response.json()
    console.log(data2)
    return data2
}
generateImage({
    prompt: "an anime character with a sycthe"
});
