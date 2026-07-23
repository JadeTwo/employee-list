let id = 15

export function randomPhoto() {
    return `./images/headshot${Math.floor(Math.random() * 11)}.jpeg`
}

export function generateId() {
    id++
    return id
}