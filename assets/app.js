let left = document.getElementsByClassName('bx bxs-chevrons-left')[0];
let right = document.getElementsByClassName('bx bx-chevrons-right')[0];
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click',()=>{
    cards.scrollLeft -= 140;
})
right.addEventListener('click',()=>{
    cards.scrollLeft += 140;
})

let poster = document.getElementById('poster');
let title = document.getElementById('title');
let price = document.getElementById('price');

Array.from(document.getElementsByClassName('card')).forEach((ele, i)=> {
    // console.log(ele)
    ele.addEventListener('click', ()=> {
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h4')[0].innerText;
        price-cont.innerText - ele.getElementsByTagName('h5')[0].innerText
   })
})