const dom = {
    password: document.getElementById('password'),
    button: document.getElementById('button'),
    passwordSettings: {
        length: document.getElementById('length'),
        uppercase: document.getElementById('uppercase'),
        numbers: document.getElementById('numbers'),
        symbols: document.getElementById('symbols'),
    }
}

const data = {
    letters: {
        up: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        down: 'abcdefghijklmnopqrstuvwxyz',
    },
    numbers: '0123456789',
    symbols: '!@#$%^&*_-+=~`<>:;?'
}

// 
function randomNumberGenerator(maxNumber) {
    const randomNumber = Math.round(Math.random() * maxNumber)
    return randomNumber
}

// character set generation function
function passwordGenerator(symbols, length) {
    const maxIdx = symbols.length - 1
    let password = ''
    
    for (let i = 0; i < length; i++) {
        const idx = randomNumberGenerator(maxIdx)
        const randomLetter = symbols[idx]
        password = password + randomLetter
    }

    return password
}


// tracking button clicks
dom.button.onclick = () => {
    const passwordLength = dom.passwordSettings.length.value
    

    const uppercase = dom.passwordSettings.uppercase.checked;
    const numbers = dom.passwordSettings.numbers.checked;
    const symbols = dom.passwordSettings.symbols.checked;

    let string = data.letters.down
    

    if (uppercase) string = string + data.letters.up
    if (numbers) string = string + data.numbers
    if (symbols) string = string + data.symbols
    
    const pas = passwordGenerator(string, passwordLength)
    dom.password.innerText = pas
}