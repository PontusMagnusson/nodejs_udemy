// const geocode = (location, callback) => {
//     setTimeout(() => {
//         const data = {
//             name: location,
//             longitude: 0,
//             latitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// const printData = (data) => {
//     console.log(data)
// }

// geocode('Sweden', printData)


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (left, right, callback) => {
    setTimeout(() => {
        callback(left + right)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})