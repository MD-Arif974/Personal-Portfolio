
// location.replace(location.href)
// location.reload();
let crossBtn = document.querySelector('.fa-circle-xmark')
let menuBtn = document.querySelector('.fa-bars');
let navList = document.querySelector('#nav-list-container')
let submitBtn = document.querySelector('.submitBtn');
let inputArr = document.querySelectorAll('input');
let textInput = document.querySelector('textarea');


crossBtn.addEventListener('click',(e)=> {
       navList.style.display = "none";
       menuBtn.style.display = "block";
       location.reload();
})

menuBtn.addEventListener('click',(e)=> {
       navList.style.display = "block";
       menuBtn.style.display = "none";
       crossBtn.style.display = "block";
       // location.reload();
})



const scriptURL = 'https://script.google.com/macros/s/AKfycbz3SuKjDGB67xgw0RkRvZ6KivCZYvscMq_YifpZI9yfMMjgeu81n6lhbErEtXROPjs-/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
       
    e.preventDefault();
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
//       inputArr.value = "";

  })

// setTimeout(()=> {
//        submitBtn.addEventListener('click',(e)=> {
//               for(let i=0;i<inputArr.length;i++){
//                    inputArr[i].value = "";
       
//               }
//               textInput.value = "";
//        })
// },10000)