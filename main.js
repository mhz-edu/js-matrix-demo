function randomString() {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    let minLength        = 20;
    let maxLength        = 40;
    let length = minLength + (Math.floor(Math.random() * (maxLength - minLength)));
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function createLine() {
    let rnd = 10 * Math.floor(Math.random() * window.innerWidth / 10)
    let div = document.createElement('div')
    div.textContent = randomString();
    div.className = 'line'
    div.style.top = -700 + 'px'
    div.style.left = rnd + 'px'
    return div
}

function moveLines(elems) {
    elems.forEach(element => {
        element.style.top = Number.parseInt(element.offsetTop) + 8 + 'px';
    });
}

function getOffscreen(elems) {
    let result = []
    elems.forEach(element => {
        if (element.offsetTop > window.innerHeight) {
            result.push(element)
        }
    })
    return result
}

function generateLine(rate) {
    if (Math.floor(Math.random() * 10) > rate) {
        document.body.appendChild(createLine())
    } 
    
}

function anim() {
    generateLine(3)
    let lines = document.querySelectorAll('.line')
    moveLines(lines)
    let remLines = getOffscreen(lines)
    remLines.forEach(element => {
        document.body.removeChild(element)
    })
    
}

window.onload = function() {
    window.setInterval(anim, 100)    
}

