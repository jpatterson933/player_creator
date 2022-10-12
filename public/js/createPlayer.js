const createPlayerForm = async (event) => {
    event.preventDefault();
    // need if statement that will only accept value between 1 and 13
    const charName = document.querySelector('#char-name').value.toUpperCase();

    const charType = document.querySelector('#char-type').value;


    if(charName > 13) {
        console.log("character name too long")
    } else if (charName < 1) {
        console.log("character name not long enough")
    }

    

    console.log(charName, charType)
};

document
    .querySelector('#create-char-form')
    .addEventListener('submit', createPlayerForm);