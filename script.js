// script.js
const cryptogramInput = document.getElementById('cryptogram-input');
const submitButton = document.getElementById('submit-button');
const resultDiv = document.getElementById('result');

submitButton.addEventListener('click', () => {
    const inputText = cryptogramInput.value;
    const decryptedText = decrypt(inputText);
    resultDiv.innerText = decryptedText;
});

function decrypt(text) {
    const cipherText = '3iz8Kqfug8xZCXSbNKZk1e';
    const key = {
        '3': 'A',
        'i': 'B',
        'z': 'C',
        '8': 'D',
        'K': 'E',
        'q': 'F',
        'f': 'G',
        'u': 'H',
        'g': 'I',
        'x': 'J',
        'Z': 'K',
        'C': 'L',
        'X': 'M',
        'S': 'N',
        'b': 'O',
        'N': 'P',
        'K': 'Q',
        'Z': 'R',
        'k': 'S',
        '1': 'T',
        'e': 'U'
    };
    let decryptedText = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i
