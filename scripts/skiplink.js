const setfocusToModeTab = () => {
    modeTabButtons.forEach((button) => {
        if (button.getAttribute("aria-selected") === "true") {
            button.focus();
            return;
        }
    })
}

skipLink.addEventListener("click", setfocusToModeTab)


