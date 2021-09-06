const searchBtnInput = document.getElementById("searchBtnInput");

const setFocusForSearchBtnInput = (e) => {
        if(searchBtnInput.classList.contains("hidden") === false) {
            console.log("search button is visible")
            searchBtnInput.classList.add("hidden")
        }
        else{
            searchBtnInput.classList.remove("hidden")
            searchBtnInput.focus();
        }
}

searchBtnInput.addEventListener("focusout", (e) => {
    if(e.relatedTarget !== searchBtn) { // allowing it to go throught will just reshow input. will be handled in search btn handler
        searchBtnInput.classList.add("hidden")
    }
})
searchBtn.addEventListener("click", setFocusForSearchBtnInput);