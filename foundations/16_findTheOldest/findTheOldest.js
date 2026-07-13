const findTheOldest = function (people) {

    const currentYear = new Date().getFullYear();

    const updated = people.map(person => ({
        ...person,
        age: person.yearOfDeath ?
            person.yearOfDeath - person.yearOfBirth :
            currentYear - person.yearOfBirth
    }));

    let oldest = updated[0];

    for (let i = 0; i < updated.length; i++) {
        if (updated[i].age > oldest.age) {
            oldest = updated[i];
        }
    }
    return oldest;

};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people));




// Do not edit below this line
module.exports = findTheOldest;
