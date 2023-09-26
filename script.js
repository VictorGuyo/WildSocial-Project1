let header = document.querySelector('.header')
let articleArea = document.querySelector('.article-area')
let footer = document.querySelector('.footer')

let messageBtn = document.querySelector('.message-img')
let sidebarRight = document.querySelector('.sidebar-right')

let profilImg = document.querySelector('.user-img')
let sidebarLeft = document.querySelector('.sidebar-left')

let messageArea = document.querySelector('.message-area')

const messageSenders = [
    {
        date: "hier",
        firstname: "John", 
        lastname: "bob",
        message: "Je suis un prince namibien et j’ai besoin de votre aide..."
    },
    {
        date: "hier",
        firstname: "John", 
        lastname: "John",
        message: "Banana Banana Banana Banana Banana"
    },
    {
        date: "hier",
        firstname: "John", 
        lastname: "Bon",
        message: "Banana Banana Banana Banana Banana"
    }
]

for (let messageSender of messageSenders) {
    const message = document.createElement('div')
    message.classList.add('message')
    const profile = document.createElement('div')
    profile.classList.add('profile')
    const senderImg = document.createElement('img')
    senderImg.classList.add('sender-img')
    senderImg.setAttribute('src', 'assets/img/WF Image Placeholder.png')
    const sender = document.createElement('div')
    sender.classList.add('sender')
    const senderName = document.createElement('p')
    senderName.classList.add('sender-name')
    senderName.innerText = `${messageSender.firstname} ${messageSender.lastname}`
    const senderTime = document.createElement('p')
    senderTime.innerText = messageSender.date
    const msgTxt = document.createElement('div')
    msgTxt.classList.add('message-text')
    const text = document.createElement('p')
    text.classList.add('text')
    text.innerText = messageSender.message
    messageArea.appendChild(message)
    message.appendChild(profile)
    profile.appendChild(senderImg)
    profile.appendChild(sender)
    sender.appendChild(senderName)
    sender.appendChild(senderTime)
    message.appendChild(msgTxt)
    msgTxt.appendChild(text)
}


messageBtn.addEventListener('click', () => {
    sidebarRight.classList.toggle('active-right')
    header.classList.toggle('shadowMode')
    articleArea.classList.toggle('shadowMode')
    footer.classList.toggle('shadowMode')
})

profilImg.addEventListener('click', () => {
    sidebarLeft.classList.toggle('active-left')
    header.classList.toggle('shadowMode')
    articleArea.classList.toggle('shadowMode')
    footer.classList.toggle('shadowMode')
})

document.addEventListener('click', e => {
    if(!sidebarRight.contains(e.target) && e.target !== messageBtn && e.target !== profilImg) {
        sidebarLeft.classList.remove('active-left')
        sidebarRight.classList.remove('active-right')
        header.classList.remove('shadowMode')
        articleArea.classList.remove('shadowMode')
        footer.classList.remove('shadowMode')
    }
})

const likeIcons = document.querySelectorAll(".like-img")

 for (let likeIcon of likeIcons) {
     likeIcon.addEventListener("click", (event) => {
        //console.log(event.target)
        event.target.strokeStyle= "red"
         const likeZone = event.target.parentNode
         const likeCounter = likeZone.querySelector("span")
         likeCounter.innerHTML++
         likeIcon.removeEventListener('click', event)
        
     })
 }



