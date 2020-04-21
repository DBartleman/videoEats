const navbarSearch = document.querySelector('.navbar_search');

// set up the event listener for the submit button
navbarSearch.addEventListener('submit', async (e) => {
    // Prevent the default behavior of the submit button
    e.preventDefault();
    //TODO: when implementing search functionality, find out why this action never fires
    console.log("sanity check");
    console.log(navbarSearch.value);
});