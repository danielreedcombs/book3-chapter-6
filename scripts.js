// // a small function that creates an h1 element in the html

// const h1 = (title, style) => {
//     return `<h1 class="${style}">${title}</h1>`
// }

// // using this function to
// document.querySelector("#container").innerHTML = `
//     ${h1("Marcus Fulbright", "xx-large")}`
//     const student = (name, clazz, info, status) => `
//     <div id="student">
//         ${h1(name, status)}
//         ${section(clazz, "section--padded")}
//         ${aside(info, "pushRight")}
//     </div>
// `

// // Build HTML elements
// const h1 = (title, style) => {
//     return `<h1 class="${style}">${title}</h1>`
//   }
  
//   const section = (title, style) => {
//     return `<section class="bordered dashed ${style}">${title}</section>`
//   }
  
//   const aside = (title, style) => {
//     return `<aside class="${style}">${title}</aside>`
//   }
  
//   // Build a component composed of many smaller elements
//   const student = (name, clazz, info, status) => `
//       <div id="student">
//           ${h1(name, status)}
//           ${section(clazz, "section--padded")}
//           ${aside(info, "pushRight")}
//       </div>
//   `
  
//   // Student Data
//   const students = [{
//       name: "Chris Miller",
//       class: "History",
//       info: "Failed last exam",
//       score: 59
//     },
//     {
//       name: "Courtney Seward",
//       class: "History",
//       info: "Has completed all homework",
//       score: 91
//     },
//     {
//       name: "Garrett Ward",
//       class: "History",
//       info: "Wonderful at helping other students",
//       score: 88
//     },
//     {
//       name: "John Dulaney",
//       class: "History",
//       info: "Has never missed a class or exam",
//       score: 92
//     },
//     {
//       name: "Greg Lawrence",
//       class: "History",
//       info: "Sub-par performance all around",
//       score: 64
//     },
//     {
//       name: "Leah Duvic",
//       class: "History",
//       info: "Wonderful student",
//       score: 97
//     },
//     {
//       name: "Jesse Page",
//       class: "History",
//       info: "Smokes too much. Distracting.",
//       score: 76
//     },
//     {
//       name: "Kevin Haggerty",
//       class: "History",
//       info: "Falls asleep in class",
//       score: 79
//     },
//     {
//       name: "Max Wolf",
//       class: "History",
//       info: "Talks too much",
//       score: 83
//     },
//     {
//       name: "Lissa Goforth",
//       class: "History",
//       info: "Asks pointless, unrelated questions",
//       score: 78
//     },
//     {
//       name: "Tyler Bowman",
//       class: "History",
//       info: "When was the last time he attended class?",
//       score: 48
//     },
//     {
//       name: "Ray Medrano",
//       class: "History",
//       info: "Needs to contribute to in-class discussions",
//       score: 95
//     }
//   ]
  
//   // Inject multiple student components into the DOM by executing the student function
//   students.forEach( (currentStudent) => {
//     let studentComponent = ""
//     if (currentStudent.score >= 60) {
//       studentComponent = student(currentStudent.name, currentStudent.class, currentStudent.info, "passing")
//     } else {
//       studentComponent = student(currentStudent.name, currentStudent.class, currentStudent.info, "failing")
//     }
  
//     document.querySelector("#container").innerHTML += `
//       ${studentComponent}
//      `
//     })

// const h1 = (...props) => {
//     console.log(props)
//     return `<h1 class="${props[1]}">${props[0]}</h1>`
//   }

// // using the function above to inject this into our html
// const section = (...props) => {
//     return `<section class="bordered dashed ${props.style}">${props.content}</section>`
// }

// const aside = (...props) => {
//     return `<aside class="${props.style}">${props.content}</aside>`

// }
// document.querySelector("#container").innerHTML += `${h1("Marcus", "xx")}`

const h1 = (...props) => {
    return `<h1 class="${props.style}">${props.content}</h1>`
}

const section = (...props) => {
    return `<section class="bordered dashed ${props.style}">${props.content}</section>`
}

const aside = (...props) => {
    return `<aside class="${props.style}">${props.content}</aside>`
}

const funky = (element, style , prop) => {
    return `<${element} class= "${style}.style">${prop}.content</${element}>`
}
console.log(funky("section","xx-large","look at me dad"))

