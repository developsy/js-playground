let word = document.getElementById('word');
let wordBtn = document.getElementById('wordBtn');
let checkWord = document.getElementById('check');
let game = {};

game.check = function(){
    if (word.innerHTML === game.word.join('')){
        checkWord.innerHTML = '일치합니다.';
    }else{
        checkWord.innerHTML = '일치하지 않습니다.';
    }
}

game.sampleWords = ['apple', 'orange', 'banana', 'pineapple', 'kiwi', 'mango', 'pear', 'persimmon', 'blueberry'];
game.choice = function(){
    let idx = Math.floor(Math.random() *this.sampleWords.length);
    return this.sampleWords[idx];
}

let answer = game.choice();
word.innerHTML = answer;
game.word = answer.split('');
game.btns = [];

for (let i = 0; i < word.innerHTML.length; i++){
    let btn = document.createElement('button');
    btn.innerHTML = game.word[i];
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

let isSuffle = Math.floor(Math.random() * 2) === 0;
if (isSuffle){
    swap();
}

for (let i = 0; i < Math.floor(Math.random() * game.btns.length); i++){
    push_right();
}