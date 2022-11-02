const createPlayerForm = async (event) => {
    event.preventDefault();
    // This will be to sanitize the data
    // function containsSpecialChars(str) {
    //     const specialChars = [/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/];
    // }



    function checkNameLength(str) {
        if (str.length > 13) {
            alert("Character name cannot be more than 13 characters!")
            console.log("character name too long")
            return;
        } else if (str.length <= 1) {
            console.log("character name not long enough")
            return;
        } else {
            return str;
        }
    }


    // need if statement that will only accept value between 1 and 13
    const name = document.querySelector('#char-name').value.toUpperCase();

    // send user name to response

    console.log(name)

    if (name) {
        fetch('/api/players', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            return response.json();
        }).then(response => {
            console.log(response, "response")
            if (response) {
                alert('Character created')
            } else {
                alert('Failed to sign up!')
            }
        })
    }



    // containsSpecialChars(charName)
    // checkNameLength(charName);


};

document
    .querySelector('#create-char-form')
    .addEventListener('submit', createPlayerForm);