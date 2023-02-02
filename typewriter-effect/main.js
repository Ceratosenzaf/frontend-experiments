const div = document.getElementById('typewriter')

const typeWriter = (text, len = 0) => {
    if(len >= text.length) return 

    const shownText = text.slice(0, len+1)
    div.innerText = shownText
    setTimeout(()=> typeWriter(text, len+1), 200)
}

typeWriter(div.innerText)