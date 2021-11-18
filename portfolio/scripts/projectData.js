const projects = Array.from(document.getElementsByClassName('project'))

export function h1() {
    let headlines = getHeadline(projects)
    return headlines
}

export function project_p() {
    fetch('../text/mem_card_p.txt')
        .then((response) => {
            return response.text()
        })
        .then((text) => {
            console.log(text)a
        })
}

function getHeadline(projects) {
    let headlines = []
    projects.forEach(element => {
        headlines.push(element.childNodes[3].childNodes[1].innerHTML)
    });
    return headlines
}