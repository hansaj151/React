/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Jon",
            last: "Snow",
            age: 26,
            description: "Jon is the king in the North",
            thumbnail: "./images/jon.jpg"
        },
        {
            id: 2,
            first: "Joey",
            last: "Tribbiani",
            age: 27,
            description: "Joey loves the Packers, cheese, and turtles.",
            thumbnail: "./images/joey.jpg"
        },
        {
            id: 3,
            first: "Maisie",
            last: "Williams",
            age: 18,
            description: "Maisie likes her dog but it is really annoying.",
            thumbnail: "./images/maisie.jpg"
        }
    ]
}
