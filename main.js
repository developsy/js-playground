let word = document.getElementById('word').innerHTML;
let wordBtn = document.getElementById('wordBtn');
let checkWord = document.getElementById('check');
let game = {};
game.word = word.split('');
game.btns = [];
game.check = function(){
    if (word === game.word.join('')){
        checkWord.innerHTML = '일치합니다.';
    }else{
        checkWord.innerHTML = '일치하지 않습니다.';
    }
}

for (let i = 0; i < word.length; i++){
    let btn = document.createElement('button');
    btn.innerHTML = word[i];
    wordBtn.appendChild(btn);
    game.btns.push(btn);
}

let swap = function(event){
    let reverse = [];

    for (let k = 0; k < game.word.length; k++){
        let letter = game.word.shift();
        game.word.push(letter);
        reverse.unshift(letter);
    }

    for (let j = 0; j < game.word.length; j++){
        game.btns[j].innerHTML = reverse[j];
    }
    game.word = reverse;
    game.check();
}

let push_left = function(event){
    const letter = game.word.shift();
    game.word.push(letter);
    for (let j = 0; j < game.word.length; j++){
        game.btns[j].innerHTML = game.word[j];
    }
    game.check();
}

let push_right = function(event){
    const letter = game.word.pop();
    game.word.unshift(letter);
    for (let j = 0; j < game.word.length; j++){
        game.btns[j].innerHTML = game.word[j];
    }
    game.check();
}