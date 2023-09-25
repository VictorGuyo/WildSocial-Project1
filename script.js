let messageBtn = document.querySelector('.message-img')
console.log(messageBtn)
let messageList = document.querySelector('.list-msg')
let messageClasslist = messageList.classList

let header = document.querySelector('.header')
let headerClasslist = header.classList
let articleArea = document.querySelector('.article-area')
let articleAreaClasslist = articleArea.classList
let footer = document.querySelector('.footer')
let footerClasslist = footer.classList

messageBtn.addEventListener('click', () => {
    messageClasslist.toggle('active')
    headerClasslist.toggle('shadowMode')
    articleAreaClasslist.toggle('shadowMode')
    footerClasslist.toggle('shadowMode')
})

let profilImg = document.querySelector('.user-img')
let sidebarList = document.querySelector('.sidebar-list')
let sidebarListClasslist = sidebarList.classList

profilImg.addEventListener('click', () => {
    sidebarListClasslist.toggle('activeLeft')
    headerClasslist.toggle('shadowMode')
    articleAreaClasslist.toggle('shadowMode')
    footerClasslist.toggle('shadowMode')
})