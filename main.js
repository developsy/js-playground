let word = document.getElementById('word');
let wordBtn = document.getElementById('wordBtn');
let checkWord = document.getElementById('check');
let score = document.getElementById('count');
let greeting = document.getElementById('congrats');
let game = {
    score: 0,
    max_score: 3,
    circles: ""
};

game.sampleWords = ['apple', 'orange', 'banana', 'pineapple', 'kiwi', 'mango', 'pear', 'persimmon', 'blueberry'];
game.choice = function () {
    let idx = Math.floor(Math.random() * this.sampleWords.length);
    return this.sampleWords[idx];
}

game.createWord = function () {
    let answer = this.choice();
    word.innerHTML = answer;
    this.word = answer.split('');
    this.btns = [];

    for (let i = 0; i < word.innerHTML.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.word[i];
        wordBtn.appendChild(btn);
        this.btns.push(btn);
    }
}

game.init = function () {
    let element = document.getElementById('wordBtn');
    if (element.childElementCount > 0) {
        for (let i = 0; i < word.innerHTML.length; i++) {
            element.removeChild(this.btns[i]);
        }
    }
    this.createWord();
}

game.init();

game.check = function () {
    if (word.innerHTML === game.word.join('')) {
        checkWord.innerHTML = '일치합니다.';
        this.init();
        this.score += 1;
        this.circles += "O";
        score.innerHTML = this.circles;
        if (this.score === 3) {
            greeting.innerHTML = 'Thank you for playing';
        }
    } else {
        checkWord.innerHTML = '일치하지 않습니다.';
    }
}


let swap = function (event) {
    let reverse = [];

    for (let k = 0; k < game.word.length; k++) {
        let letter = game.word.shift();
        game.word.push(letter);
        reverse.unshift(letter);
    }

    for (let j = 0; j < game.word.length; j++) {
        game.btns[j].innerHTML = reverse[j];
    }
    game.word = reverse;
    game.check();
}

let push_left = function (event) {
    const letter = game.word.shift();
    game.word.push(letter);
    for (let j = 0; j < game.word.length; j++) {
        game.btns[j].innerHTML = game.word[j];
    }
    game.check();
}

let push_right = function (event) {
    const letter = game.word.pop();
    game.word.unshift(letter);
    for (let j = 0; j < game.word.length; j++) {
        game.btns[j].innerHTML = game.word[j];
    }
    game.check();
}

game.shuffle = function () {
    let isSuffle = Math.floor(Math.random() * 2) === 0;
    if (isSuffle) {
        swap();
    }

    for (let i = 0; i < Math.floor(Math.random() * game.btns.length); i++) {
        push_right();
    }
};

game.shuffle();
