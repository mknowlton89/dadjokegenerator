// let favs = [];

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

function favorite() {

    let favStatus = document.getElementById("favorite");

    if (favStatus.hasAttribute("status")) {
        alert("unfav was called");
        document.getElementById("favicon").src = "svgs/star.svg";

        const joke = document.getElementById("joke").innerHTML;

        let favs = localStorage.getItem("favs");

        favs = JSON.parse(favs);
        console.log(favs);

        // favs = favs.filter(item => !forDeletion.includes(joke))
        // arr = arr.filter(item => item !== value)
        favs = favs.filter(item => item !== joke)

        console.log(favs);
    }

    else {
        
        // document.getElementById("favorite").innerHTML = " Unfavorite";
        document.getElementById("favicon").src = "svgs/star-fill.svg";

        // Get the joke in a string.
        const joke = document.getElementById("joke").innerHTML;

        let favs = localStorage.getItem("favs");

        // if you already have any favorite jokes, add to it
        if (favs) {
            favs = JSON.parse(favs);

            const combinedJokes = [joke, ...favs]
            localStorage.setItem("favs", JSON.stringify(combinedJokes));

        }
        else {
            localStorage.setItem("favs", JSON.stringify([joke]));
        }

        // document.getElementById("favorite").style.pointerEvents = "none";
        // x.setAttribute("target", "_self");
        favStatus.setAttribute("status", "favorited");
    }
    

    // else if (document.getElementById("favortie").attributes = "unfavorited") {
    //     alert("unfav was called");
    // }

}

function resetState() {
    document.getElementById("copyicon").src = "svgs/clipboard.svg";
    document.getElementById("favicon").src = "svgs/star.svg";
    document.getElementById("favorite").style.pointerEvents = "auto";
    document.getElementById("favorite").removeAttribute("status");

 
}

function loadFavorites() {
    // load in favs list from local storage
    let favslist = localStorage.getItem("favs");

    // Build an array that I can manipulate
    let fullFavsList = JSON.parse(favslist);

    // For loop to loop through array and create list.
    for (let i = 0; i < fullFavsList.length; i++) {
        let joke = fullFavsList[i];
        listItem = document.createElement('li')
        document.getElementById("favList").appendChild(listItem).innerHTML = joke;
    }

}
