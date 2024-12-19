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

function generatePassword() {
const length = getPasswordLength();
const properties = getPasswordProperties();

console.log(length, properties)
}