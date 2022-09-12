let word = document.getElementById('word').innerHTML;
let wordBtn = document.getElementById('wordBtn');

for (let i = 0; i < word.length; i++){
    let btn = document.createElement('button');
    btn.innerHTML = word[i];
    wordBtn.appendChild(btn);
}

let swap = function(event){
    console.log('swap');
}

let push = function(event){
    console.log('push');
}