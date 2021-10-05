let userData = {
    name: '',
    gender: '',
    birthday: '',
    favoriteFood: ''
}

window.onload = () => start();

function start() {
    userData.name = getName();
    genderData();
}

function getName () {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('name');
}

function genderData () {
    let next = document.getElementById('next')
    next.addEventListener('click', () => {
        let gender = document.getElementsByClassName('user_gender')
        for(let i = 0; i < gender.length; i ++)
        if ( gender[i].checked ) userData.gender = gender[i].value;
        birthData();
    })
}

function birthData () {
    let question = document.getElementById('birthdate')
    question.style.display = 'block'
    let next = document.getElementById('next1')

    next.addEventListener('click', () =>{
        let birthInput = document.getElementById('user_birthday')
        userData.birthday = birthInput.value
        console.log(userData.birthday)
        foodData();
    })
}

function foodData () {
    let question = document.getElementById('food')
    question.style.display = 'block'
    let foodData = document.getElementById('user_food')
    let next = document.getElementById('next2');

    next.addEventListener('click', () =>{
        userData.favoriteFood = foodData.value
        printData();
    })
}

function printData () {
    let answers = document.getElementById('answers')
    let datap = document.createElement('p')
    const {name, gender, birthday, favoriteFood} = userData
    console.log(name, gender, birthday, favoriteFood)
    datap.innerHTML = 'name: ' + name + ' gender: ' + gender + ' birthday: ' + birthday + ' favorite food: ' +favoriteFood
    answers.appendChild(datap)
}