const GITHUB_API = 'https://api.github.com/users/'
const input = document.getElementById('input')
const error = document.getElementById('error')
const profile = document.getElementById('profile')

const debounce = (func, timeout = 300) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args); }, timeout)
    }
}

const updateUser = (data) => {
    if(data.message === 'Not Found') {
        error.classList.replace('hidden', 'visible')
        profile.classList.replace('visible', 'hidden')
        return
    }
    profile.classList.replace('hidden', 'visible')
    error.classList.replace('visible', 'hidden')
    document.getElementById('image').src = data.avatar_url
    document.getElementById('name').href = data.html_url
    document.getElementById('name').innerText = data.login
}

const fetchUser = () => fetch(GITHUB_API + input.value)
    .then((response) => response.json())
    .then(updateUser)

input.addEventListener('change', debounce(fetchUser))