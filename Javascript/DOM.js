//DOM
//Document Object Model

let heading = document.getElementById('title')       //<h1 id="title">Hello</h1>
console.log(heading)

function changeText()
{
    heading.innerHTML="Hello JavaScript"
}

console.log(heading.textContent)
console.log(heading.id)

const input1 = document.getElementById('id_1')             // <input id = "id_1" class="input_control">
console.log(input1.className)

const input = document.getElementsByClassName('input_control')
console.log(input)

console.log(input[1].id)

const para = document.getElementsByTagName('p')
console.log(para[1].textContent)

//[<p>Hello World</p>,<p>Hello Earth</p>]

document.getElementById('p2').textContent="Hello Sky"

document.getElementById('p2').innerHTML="<h5 id = 'newTitle'>Hello JavaScript Globe</h5>"

heading.style.color = "Blue"

// input[0].setAttribute("placeholder", "Enter Name")
// input[1].setAttribute("placeholder", "Enter Password")

let link = document.createElement('a')

document.body.append(link)

link.setAttribute('src', "https://www.google.com/")





