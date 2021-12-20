// input form
function GetId(item) {
    return document.getElementById(item)
}
const form = {
    name: GetId("form_name"),
    email: GetId("form_mail"),
    text: GetId("form_text"),
}
const dir = window.location.pathname.split('/')[2];

document.getElementById('form_btn').addEventListener('click', (e) => {
    e.preventDefault();
    let data = new FormData()
    
    data.append("name", form_name.value)
    data.append("email", form_email.value)
    data.append("text", form_text.value)
    const xhr = new XMLHttpRequest()
    if (!dir == '') {
        xhr.open('POST', '../php/thankyou.php')
    } else xhr.open('POST', './php/thankyou.php')
    xhr.onload = function () {
        form_name.value = ''
        form_email.value = ''
        form_text.value = ''
        form_name.setAttribute('placeholder', '')
        form_email.setAttribute('placeholder', '')
        document.getElementsByClassName('thank_you_h')[0].classList.toggle('hide')
        document.getElementById('contact_form').classList.toggle('thank_you')
    }
    console.log(data)
    xhr.send(data)
})

// if (form_name != '' && form_email != '') {
//     [form_name, form_email].forEach((el) => {
//         el.addEventListener('input', () => {
//             el.style.outline = 'none'
//         })
//     })
// }

// navigation 

import { toggleSidebar } from './hamburger.js'

const setUpScroll = (setup) => {
    item.forEach((element, index) => {
        element.addEventListener('click', () => {
            if (index == 0) toggleSidebar()
            window.scroll({
                top: to,
                behavior: 'smooth'
            })
        })
    })
}

const about = Array.from(document.getElementsByClassName('to_about'))
const to_about = document.getElementsByClassName('about')[0].offsetTop - 150
const projects = Array.from(document.getElementsByClassName('to_works'))
const to_projects = document.getElementsByClassName('projects')[0].offsetTop - 300
const contact = Array.from(document.getElementsByClassName('to_contact'))
const to_Contact = document.querySelector('footer').offsetTop
const top = document.getElementsByClassName('back_to_top')[0]
const setup = [about]

// count visitor
console.log('1')
fetch('https://api.countapi.xyz/update/artemishkov/?amount=1')
    .then(data => data.json)
    .then(data => {
        console.log(data)
        console.log("Hey console seeker!. You are the: " + data.value + "nth visitor!")
    })
console.log('2')
// get user location
fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
