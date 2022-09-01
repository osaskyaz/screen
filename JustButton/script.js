const btn = document.querySelector('.btn');
const bodyBcg = document.querySelector('body');

const colors = ['red','green','blue','yellow','black','brown'];

btn.addEventListener('click', change);

function change(){
    let random = Math.floor(Math.random()*colors.length);
    bodyBcg.style.background = colors[random];
}