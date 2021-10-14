const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const named = document.getElementById('named')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">`
    title.innerHTML = `Lorem ipsum dolor sit amet.`
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, facilis.`
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/47.jpg" alt="">`
    named.innerHTML = `Mehmet Guven`
    date.innerHTML = `Oct 12, 2021`

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bgt => bgt.classList.remove('animated-bg-text'))
}
