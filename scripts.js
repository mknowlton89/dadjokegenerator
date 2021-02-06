
const jokey = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

async function fetchjoke(){

const jokes= await fetch('https://icanhazdadjoke.com/',{
    headers: {
        'Accept':'application/json'
    }
});
    const joke = await jokes.json();

    jokey.innerHTML = joke.joke;

    document.getElementById("copy").style.visibility = "visible";

    document.getElementById("copy").innerHTML = "Copy to Clipboard"

}

function CopyToClipboard() {
    const range = document.createRange();
    range.selectNode(document.getElementById("joke"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    document.getElementById("copy").innerHTML = "Copied!"
}
