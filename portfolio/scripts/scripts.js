window.addEventListener('pageshow', myFunction);
function myFunction(event) { 
    if (event.persisted) {
      window.location.reload(true)
    } 
}

// input form
let form_name = document.getElementById("form_name")
let form_email = document.getElementById("form_mail")
const testmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

document.getElementById('form_btn').addEventListener('click', (e) => {
    e.preventDefault();
    let form_text = document.getElementById("form_text")
    let data = new FormData()

    if( !form_email.value.match(testmail )) {
        form_email.style.outline = '6px solid red'
        form_email.setAttribute('placeholder', 'I need your email !');
    } 
    if( form_name.value == '' ) {
        form_name.style.outline = '6px solid red'
        form_name.setAttribute('placeholder', 'Shall i call you Bob?')
    }
    if( !form_email.value.match(testmail) || form_name.value == '' ) return

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

if(form_name != '' && form_email != ''){
[form_name, form_email].forEach((el) => {
    el.addEventListener('input', () => {
        el.style.outline = 'none'
    })
})}

// scroll

let projectsDiv = document.querySelector('.projects')
let contactDiv = document.querySelector('footer')
let topOfPage = document.querySelector('header')

Array.from(document.getElementsByClassName('to_works')).forEach(btn => {
    btn.addEventListener('click', () => {
        window.scroll({
            top : projectsDiv.offsetTop-200,
            behavior :'smooth'
        })
    })
})

Array.from(document.getElementsByClassName('to_contact')).forEach(btn => {
    btn.addEventListener('click', () => {
        window.scroll({
            top : contactDiv.offsetTop,
            behavior :'smooth'
        })
    })
})

Array.from(document.getElementsByClassName('to_contact')).forEach(btn => {
    btn.addEventListener('click', () => {
        window.scroll ({
            top: 0,
            behavior : 'smooth'
        })
    })
})

// count visitor

fetch('https://api.countapi.xyz/update/artemishkov/?amount=1')
    .then(data => data.json())
    .then(data => {
        console.log("Hey console seeker!. You are the: " + data.value + "nth visitor!")
    })
    .catch(data => console.log('nope'))

// get user location

fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
