const createPlayerForm = async (event) => {
    event.preventDefault();

    // need if statement that will only accept value between 1 and 13
    const name = document.querySelector('#char-name').value.toUpperCase();
    if (name) {
        fetch('/api/players', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            return response.json();
        }).then(response => {
            // shows our validation error message
            if (response.name === 'SequelizeValidationError') {
                let errMsg = response.errors[0].message;
                alert(errMsg)
            }
        })
    }

    // document.reload();


};

document
    .querySelector('#create-char-form')
    .addEventListener('submit', createPlayerForm);