let crossBtn = document.querySelector('.fa-circle-xmark')
let menuBtn = document.querySelector('.fa-bars');
let navList = document.querySelector('#nav-list-container')

crossBtn.addEventListener('click',(e)=> {
       navList.style.display = "none";
       menuBtn.style.display = "block";
})

menuBtn.addEventListener('click',(e)=> {
       navList.style.display = "block";
       menuBtn.style.display = "none";
       crossBtn.style.display = "block";
})
