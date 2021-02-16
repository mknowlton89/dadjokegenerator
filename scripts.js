
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

    // Check to see if the user has already favorited the joke. If so, we need to remove it from the array and local storage.
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

    if (fullFavsList == null) {
        // alert("Local storage is empty");
        document.getElementById("deleteAll").style.visibility = "hidden";
        document.getElementById("noFavorites").style.visibility = "visible";
        }

    else {

    // Hide the "noFavorites" section.
    document.getElementById("noFavorites").style.visibility = "hidden";

    // // For loop to loop through array and create list.
    //     for (let i = 0; i < fullFavsList.length; i++) {
    //         let joke = fullFavsList[i];
    //         listItem = document.createElement('li');
    //         listItem.value = i + 1;
    //         delBtn = document.createElement("button")
    //         delBtn.innerText = "Delete";
    //         document.getElementById("favList").appendChild(listItem).innerHTML = joke;
    //         // document.getElementById("favList").appendChild(delBtn).innerHTML = "Delete"
    //     }
    // For loop to loop through array and create list.
        for (let i = 0; i < fullFavsList.length; i++) {
            let joke = fullFavsList[i];
            // <li><button>Delete</button></li>
            <li>Test</li>

            // listItem = document.createElement('li');
            // listItem.value = i + 1;
            // delBtn = document.createElement("button")
            // delBtn.innerText = "Delete";
            // document.getElementById("favList").appendChild(listItem).innerHTML = joke;
            // document.getElementById("favList").appendChild(delBtn).innerHTML = "Delete"
        }
    }  
}

function deleteAll() {

    localStorage.clear("favs");

    location.reload();

}

function deleteJoke(value) {
    // TODO - Get the joke the user wants to delete
    const jokeToDelete = TODO

    // load in favs list from local storage
    let favslist = localStorage.getItem("favs");

    // Build an array that I can manipulate
    let fullFavsList = JSON.parse(favslist);

    // Build for loop to find the string in the array that matches the joke the user wants to delete.

    // Remove the joke from the array using slice() or "filter" like in the favorite function.

    // Re-stringify the array and save to local storage

    // Then I need to remove the joke from the list (but ideally, without reloading the page.)
}
