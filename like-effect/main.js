const heart = document.getElementById('heart')

const toggleHidden = () => {
    heart.classList.toggle('hidden')
    heart.classList.toggle('fa-10x')
}

const like = (e)=> {
    heart.style.left = `${e.clientX}px`
    heart.style.top = `${e.clientY}px`
    toggleHidden()
    setTimeout(toggleHidden, 1000)
}

const img = document.getElementById('img')
img.addEventListener('click', like)