export function setupham () {
    const hamIcon = document.getElementById('hamburger_icon')
    hamIcon.addEventListener('click', open_close)
}

function open_close () {
    const slider = document.getElementById('hamburger')
    const hmContent = document.querySelectorAll('.burger_content')
    slider.classList.toggle('openburger')
    if (hmContent[0].classList.contains('hide')){
        setTimeout(() => {
            hmContent.forEach(element => element.classList.toggle('hide'));
        }, 300);
    }
    else {
        hmContent.forEach(element => element.classList.toggle('hide'))
    }
}