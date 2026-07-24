export let id = 5

function random(max) {
    return Math.floor(Math.random() * max)
}

export function randomPhoto() {
    return `../images/headshot${random(12)}.jpeg`
}

export function generateId() {
    id++
    return id
}

export function formatEmail(name) {
    const emails = ['gmail', 'hotmail', 'aol', 'yahoo']
    return `name${random(10) + random(10)}@${emails[random(4)]}.com`
}

export function randomPhoneNumber() {
    let phone = [0,0,0,0,0,0,0,0,0,0];
    return phone.map(n => random(10)).join('')
}