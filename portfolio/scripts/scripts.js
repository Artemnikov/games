// input form

let form_name = document.getElementById("form_name")
let form_email = document.getElementById("form_mail")
const testmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

document.getElementById('form_btn').addEventListener('click', (e) => {
    e.preventDefault();
    let form_text = document.getElementById("form_text")
    let data = new FormData()

    if (!form_email.value.match(testmail)) {
        form_email.style.outline = '6px solid red'
        form_email.setAttribute('placeholder', 'I need your email !');
    }
    if (form_name.value == '') {
        form_name.style.outline = '6px solid red'
        form_name.setAttribute('placeholder', 'Shall i call you Bob?')
    }
    if (!form_email.value.match(testmail) || form_name.value == '') return

    data.append("name", form_name.value)
    data.append("email", form_email.value)
    data.append("text", form_text.value)

    const xhr = new XMLHttpRequest()
    xhr.open('POST', './php/thankyou.php')
    xhr.onload = function () {
        document.getElementsByClassName('thank_you_h')[0].classList.toggle('hide')
        document.getElementById('contact_form').classList.toggle('thank_you')
        form_name.value = ''
        form_email.value = ''
        form_text.value = ''
        form_name.setAttribute('placeholder', '')
        form_email.setAttribute('placeholder', '')
        console.log('message sent');

    }
    xhr.send(data)
})

if (form_name != '' && form_email != '') {
    [form_name, form_email].forEach((el) => {
        el.addEventListener('input', () => {
            el.style.outline = 'none'
        })
    })
}

// navigation 

const toContact = Array.from(document.getElementsByClassName('to_contact'))
toContact.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (index == 0) toggleSidebar()
        window.scroll({
            top: document.querySelector('footer').offsetTop,
            behavior: 'smooth'
        })
    })
});

const toProjects = Array.from(document.getElementsByClassName('to_works'))
toProjects.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (index == 0) toggleSidebar()
        window.scroll({
            top: document.getElementsByClassName('projects')[0].offsetTop - 300,
            behavior: 'smooth'
        })
    })
})

const toAbout = Array.from(document.getElementsByClassName('to_about'))
toAbout.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (index === 0) toggleSidebar()
        window.scroll({
            top: document.getElementsByClassName('about')[0].offsetTop - 150,
            behavior: 'smooth'
        })
    })
})

document.getElementsByClassName('back_to_top')[0].addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})

// count visitor

fetch('https://api.countapi.xyz/update/artemishkov/?amount=1')
    .then(data => data.json())
    .then(data => {
        console.log("Hey console seeker!. You are the: " + data.value + "nth visitor!")
    })
    .catch(data => console.log('nope'))

// start project animation 

import { h1 } from './projectData.js'

const project_btn = document.getElementsByClassName('project_btn')[0]
const project_disc = document.getElementsByClassName('project_dis')[0]
const projects = document.getElementsByClassName('projects')[0]
const project = Array.from(document.getElementsByClassName('project'))

project_btn.addEventListener('click', projectAnimations)

function projectAnimations() {

    project.forEach((element) => {
        element.classList.toggle('sort_project')
    })

    for (let i = 0; i < project.length; i++) {
        if (event.target.parentNode == project[i].childNodes[3]) {
            project_disc.childNodes[1].innerHTML = h1()[i]
            fetch('../text/mem_card_p.txt')
                .then((response) => {
                    return response.text()
                })
                .then((text) => {
                    project_disc.childNodes[3].innerHTML = text
                })
            fetch(`../text/mem_card_code.txt`)
                .then((response) => {
                    return response.text()
                })
                .then((text) => {
                    console.log(text)
                    project_disc.childNodes[5].innerHTML = text
                })
        }
    }

    setTimeout(() => {
        project_disc.classList.toggle('project_slide')
        projects.classList.toggle('sort_colum')
    }, 250);
}