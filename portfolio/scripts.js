window.onload = start

function start () {
    let projectsDiv = document.getElementsByClassName('projects')[0]
    let contactDiv = document.getElementById('contact_froms')
    document.getElementById('to_works').addEventListener('click', () => {
        window.scroll({
            top: projectsDiv.offsetTop-200,
            behavior :'smooth'
        })
    })

    document.getElementById('to_contact').addEventListener('click', () => {
        window.scroll({
            top: contactDiv.offsetTop,
            behavior :'smooth'
        })
    })

}