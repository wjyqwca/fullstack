// const arto = {
//     name: 'Arto Hellas',
//     greet: () => {
//         console.log('hello, my name is ' + this.name)
//     },
// }


// setTimeout(arto.greet, 1000)

const arto = {
    name: 'Arto Hellas',


    greet: function () {
        console.log('hello, my name is ' + this.name)
    },
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed