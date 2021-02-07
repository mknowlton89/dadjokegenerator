let favs = [];

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

    document.getElementById("engagement-container").style.visibility = "visible";

    resetState();

}

function CopyToClipboard() {
    const range = document.createRange();
    range.selectNode(document.getElementById("joke"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    // document.getElementById("copy").innerHTML = "Copied"
    document.getElementById("copyicon").src = "svgs/clipboard-check.svg";
}

function shareToFacebook() {
    // const range = document.createRange();
    // range.selectNode(document.getElementById("joke"));
    // window.getSelection().removeAllRanges(); // clear current selection
    // window.getSelection().addRange(range); // to select text
    // document.execCommand("copy");
    // window.getSelection().removeAllRanges();// to deselect

    // // document.getElementById("copy").innerHTML = "Copied"
    // document.getElementById("copyicon").src = "svgs/clipboard-check.svg";
}

function shareToInstagram() {
    // const range = document.createRange();
    // range.selectNode(document.getElementById("joke"));
    // window.getSelection().removeAllRanges(); // clear current selection
    // window.getSelection().addRange(range); // to select text
    // document.execCommand("copy");
    // window.getSelection().removeAllRanges();// to deselect

    // // document.getElementById("copy").innerHTML = "Copied"
    // document.getElementById("copyicon").src = "svgs/clipboard-check.svg";
}

function favorite() {
    document.getElementById("favicon").src = "svgs/star-fill.svg";

    // Get the joke in a string.
    let joke = document.getElementById("joke").innerHTML;

    // Add joke to array
    favs.push(joke);
    // localStorage["favs"] = JSON.stringify(datas);

    console.log(favs);

    localStorage.setItem("favs", favs);

// Retrieve
// var stored_datas = JSON.parse(localStorage["datas"]);



}

function resetState() {
    document.getElementById("copyicon").src = "svgs/clipboard.svg";
    // document.getElementById("shareFbicon").src = "svgs/facebook.svg";
    // document.getElementById("shareIgicon").src = "svgs/instagram.svg";
    document.getElementById("favicon").src = "svgs/star.svg";
 
}

function loadFavs() {
    alert("loadFavs was called");
}
