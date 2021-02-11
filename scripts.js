
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

    document.getElementById("copyicon").src = "svgs/clipboard-check.svg";
    
}

function favorite() {

    let favStatus = document.getElementById("favorite").getAttribute("status");
    let favButton = document.getElementById("favorite");
    const joke = document.getElementById("joke").innerHTML;
    let favs = localStorage.getItem("favs");

    if (favStatus != null) {
        
        // Update the icon to the unfilled star
        document.getElementById("favicon").src = "svgs/star.svg";

        // Remove the status attribute
        document.getElementById("favorite").removeAttribute("status"); 

        // Parse the favs list from local storage back into an array
        favs = JSON.parse(favs);

        // Remove the current joke from the array
        favs = favs.filter(item => item !== joke)

        // Re-stringify the favs array and set it to local storage
        localStorage.setItem("favs", JSON.stringify(favs));

    }

    else {

        // Change the icon to the filled in star
        document.getElementById("favicon").src = "svgs/star-fill.svg";

        // if you already have any favorite jokes, add to it
        if (favs) {
            favs = JSON.parse(favs);

            const combinedJokes = [joke, ...favs]
            localStorage.setItem("favs", JSON.stringify(combinedJokes));

        }
        // Otherwise, create an array of one item (the joke) and add it to localStorage
        else {
            localStorage.setItem("favs", JSON.stringify([joke]));
        }

        // Add an attribute (status) with a value of "favorited" so we know the state has changed.
        favButton.setAttribute("status", "favorited");
    }
    
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
