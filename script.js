

const quote = document.getElementById('quote');
const generate = document.getElementById('generate');
const auth = document.getElementById('author');

const url = 'https://api.quotable.io/random';

generate.addEventListener('click',gen)
async function gen(){
    await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            auth.textContent = "- "+data.author;
            quote.textContent = '"'+data.content+'"';
        });
}