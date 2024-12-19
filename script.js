function getPasswordLength() {
    const length = document.getElementById('length').value;
    return Number(length);
}

function getPasswordProperties() {
    const ids = ['lowercase', 'uppercase', 'numbers', 'special'];
    const properties = {};

    for (const id of ids) {
        const element = document.getElementById(id);
        properties[id] = element.checked;
    }

    return properties;
}

function getLowercaseChar() {
    const a = 97;
    let chars = [];

    for(let i = a; i < a + 26; i++) {
        chars.push(String.fromCharCode(i))
    }
}

function generatePassword() {
    const length = getPasswordLength();
    const properties = getPasswordProperties();
}