

let maths = [
    {
        data: {
            id: 1,
            question : 'In a class of 40 students, 32 offer Mathematics, 24 offer Physics, and 4 offer neither Mathematics nor Physics. How many offer both Mathematics and Physics?',
            options: {
                a: 4,
                b: 8,
                c: 16,
                d: 20
            }
        },
        image:'',
        answer: 'd',
        solution: '',
        examtype: 'utme',
        examyear: 2019
    },

    {
        data: {
            id: 2,
            question : 'A trader realises 10x - x<sup>2</sup> Naira profit from the sale of x bags of corn. How many bags will give him the maximum profit?',
            options: {
                a: 7,
                b: 6,
                c: 5,
                d: 4
            }
        },
        image:'',
        answer: 'c',
        solution: '',
        examtype: 'utme',
        examyear: 2019
    },

    {
        data: {
            id: 3,
            question : 'If y = 23<sub>five</sub> + 101<sub>three</sub>, find y, leaving your anwser in base two?',
            options: {
                a: 1110,
                b: 10111,
                c: 11101,
                d: 111100
            }
        },
        image:'',
        answer: 'b',
        solution: '',
        examtype: 'utme',
        examyear: 2019
    },

    {
        data: {
            id: 4,
            question : 'Find the value of x in the diagram',
            options: {
                a: '10&#176;',
                b: '28&#176;',
                c: '36&#176;',
                d: '40&#176;'
            }
        },
        image:'assets/img/question-10.PNG',
        answer: 'd',
        solution: '',
        examtype: 'utme',
        examyear: 2019
    },

    {
        data: {
            id: 5,
            question : 'Solve for t in the equation (3/4)t + (1/3)(21 - t) = 11',
            options: {
                a: '9/13',
                b: '5/13',
                c: '5',
                d: '48/5'
            }
        },
        image:'',
        answer: 'd',
        solution: '',
        examtype: 'utme',
        examyear: 2019
    },

    {
        data: {
            id: 6,
            question : 'Given that sin(5x - 28)&#176; = cos(3x - 50)&#176;, 0 < x < 90&#176;. Find the value of x',
            options: {
                a: '14&#176;',
                b: '21&#176;',
                c: '32&#176;',
                d: '39&#176;'
            }
        },
        image:'',
        answer: 'b',
        solution: '',
        examtype: 'utme',
        examyear: 2019
    },

    {
        data: {
            id: 7,
            question : 'If [x/(a + 1)] + (y/b) = 1',
            options: {
                a: '[b(a + 1 - x)] / (a + 1)',
                b: '(a + 1) / [b(a - x + 1)]',
                c: '[a(b - x + 1)] / (b + 1)',
                d: 'b / [a(b - x + 1)]'
            }
        },
        image:'',
        answer: 'a',
        solution: '',
        examtype: 'utme',
        examyear: 2019
    },

    {
        data: {
            id: 8,
            question : 'Calculate the total surface area of a cupboard which measures 12cm by 10cm by 8cm',
            options: {
                a: '1920cm<sup>2</sup>',
                b: '592cm<sup>2</sup>',
                c: '296cm<sup>2</sup>',
                d: '148cm<sup>2</sup>'
            }
        },
        image:'',
        answer: 'b',
        solution: '',
        examtype: 'utme',
        examyear: 2019
    },

    {
        data: {
            id: 9,
            question : 'Convert 0.04945 to two significant figures',
            options: {
                a: 0.040,
                b: 0.049,
                c: 0.050,
                d: 0.49
            }
        },
        image:'',
        answer: 'b',
        solution: '',
        examtype: 'utme',
        examyear: 2019
    },

    {
        data: {
            id: 10,
            question : 'From a point R, 300m north of P, a man walks eastwards to a place Q which is 600m from P. Find the bearing of P from Q, correct to the nearest degree.',
            options: {
                a: '026&#176;',
                b: '045&#176;',
                c: '210&#176;',
                d: '240&#176;'
            }
        },
        image:'',
        answer: 'd',
        solution: '',
        examtype: 'utme',
        examyear: 2019
    }
];

let scoreContainer = document.querySelector('#score-container'),
 optionsContainer = document.querySelector('.options-container'),
 questionScoreContainer = document.querySelector('#quest-n-score-container'),
 tryAgain = document.querySelector('#try-again'),
 next = document.querySelector('#next'),
 start = document.querySelector('#start'),
 previous = document.querySelector('#previous'),
 optionsContainerA = document.querySelector('.option-a'),
 optionsContainerB = document.querySelector('.option-b'),
 optionsContainerC = document.querySelector('.option-c'),
 optionsContainerD = document.querySelector('.option-d'),
 questionImage = document.querySelector('#question-image'),
 radioA = document.querySelector('#a').disabled,
 radioB = document.querySelector('#b').disabled,
 radioC = document.querySelector('#c').disabled,
 radioD = document.querySelector('#d').disabled,
 checkRadioA = document.querySelector('#a').checked,
 checkRadioB = document.querySelector('#b').checked,
 checkRadioC = document.querySelector('#c').checked,
 checkRadioD = document.querySelector('#d').checked,
 clickedA = false,
 clickedB = false,
 clickedC = false,
 clickedD = false,
 clickCounterA = 0,
 clickCounterB = 0,
 clickCounterC = 0,
 clickCounterD = 0,
 questCount = 0,
 scoreCount = 0;

start.addEventListener('click', function () {
    // document.querySelector('#score-count').innerHTML = scoreCount;
    questionScoreContainer.style.display = 'block';
    optionsContainer.style.display = 'block';
    next.style.display = 'block';
    start.style.display = 'none';
    startQuiz(questCount);

    // alert(math[questCount].data.question);
});

next.addEventListener('click', function () {
    questCount++;
    if (questCount === 0) {
        previous.style.display = 'none';
    }
    else {
        previous.style.display = 'block';
    }
    startQuiz(questCount);
    returnDefault();
});

previous.addEventListener('click', function () {
    questCount--;
    if (questCount === 0) {
        previous.style.display = 'none';
    }
    else {
        previous.style.display = 'block';
    }
    startQuiz(questCount);
    returnDefault();
});

tryAgain.addEventListener('click', function() {
    tryAgain.style.display = 'none';
    start.style.display = 'block';
    document.querySelector('#question-container').innerHTML = '2019 JAMB, MATHEMATICS';
    questCount = 0;
    scoreCount = 0;
});

optionsContainerA.addEventListener('click', function () {
    
    if (clickedB == clickedC == clickedD && clickCounterA < 1) {
        clickedA = true;
        document.querySelector('#b').disabled = true;
        document.querySelector('#c').disabled = true;
        document.querySelector('#d').disabled = true;
        document.querySelector('#a').checked = true;
        clickCounterA += 1;
        if (questCount === 6) {
            document.querySelector('#score-count').innerHTML = scoreCount++;
            if (document.querySelector('#score-count').innerHTML == 0) {
                document.querySelector('#score-count').innerHTML = scoreCount++;
            }
            optionsContainerA.style.backgroundColor = 'green';
            optionsContainerA.style.color = 'white';
        }
        else {
            optionsContainerA.style.backgroundColor = 'red';
            optionsContainerA.style.color = 'white';
        }
    }    
});

optionsContainerB.addEventListener('click', function () {

    if (clickedA == clickedC == clickedD && clickCounterB < 1) {
        clickedB = true;
        document.querySelector('#a').disabled = true;
        document.querySelector('#c').disabled = true;
        document.querySelector('#d').disabled = true;
        document.querySelector('#b').checked = true;
        clickCounterB += 1;
        if (questCount == 2 || questCount == 5 || questCount == 7 || questCount == 8) {
            optionsContainerB.style.backgroundColor = 'green';
            optionsContainerB.style.color = 'white';
            document.querySelector('#score-count').innerHTML = scoreCount++;
            if (document.querySelector('#score-count').innerHTML == 0) {
                document.querySelector('#score-count').innerHTML = scoreCount++;
            }
        }
        else {
            optionsContainerB.style.backgroundColor = 'red';
            optionsContainerB.style.color = 'white';
        }
    }
});

optionsContainerC.addEventListener('click', function () {

    if (clickedB == clickedA == clickedD && clickCounterC < 1) {
        clickedC = true;
        document.querySelector('#a').disabled = true;
        document.querySelector('#b').disabled = true;
        document.querySelector('#d').disabled = true;
        document.querySelector('#c').checked = true;
        clickCounterC += 1;
        if (questCount == 4) {
            optionsContainerC.style.backgroundColor = 'green';
            optionsContainerC.style.color = 'white';
            document.querySelector('#score-count').innerHTML = scoreCount++;
            if (document.querySelector('#score-count').innerHTML == 0) {
                document.querySelector('#score-count').innerHTML = scoreCount++;
            }
        }
        else {
            optionsContainerC.style.backgroundColor = 'red';
            optionsContainerC.style.color = 'white';
        }
    }
});

optionsContainerD.addEventListener('click', function () {
    
    if (clickedB == clickedC == clickedA && clickCounterD < 1) {
        clickedD = true;
        document.querySelector('#b').disabled = true;
        document.querySelector('#c').disabled = true;
        document.querySelector('#a').disabled = true;
        document.querySelector('#d').checked = true;
        clickCounterD += 1;
        if (questCount == 0 || questCount == 3 || questCount == 4 || questCount == 9) {
            document.querySelector('#score-count').innerHTML = scoreCount++;
            if (document.querySelector('#score-count').innerHTML == 0) {
                document.querySelector('#score-count').innerHTML = scoreCount++;
            }
            optionsContainerD.style.backgroundColor = 'green';
            optionsContainerD.style.color = 'white';
        }
        else {
            optionsContainerD.style.backgroundColor = 'red';
            optionsContainerD.style.color = 'white';
        }
    }    
});


function startQuiz(questCount) {
    if (questCount < maths.length) {
        document.querySelector('#question-container').innerHTML = maths[questCount].data.question;
        document.querySelector('#answer-a').innerHTML = maths[questCount].data.options.a;
        document.querySelector('#answer-b').innerHTML = maths[questCount].data.options.b;
        document.querySelector('#answer-c').innerHTML = maths[questCount].data.options.c;
        document.querySelector('#answer-d').innerHTML = maths[questCount].data.options.d;
        
        if (questCount === 3) {
            document.querySelector('#question-image').innerHTML = '<img src="' + maths[questCount].image + '" alt="Image of question" heigth="300px" width="300px">';
        }
        else {
            document.querySelector('#question-image').innerHTML = '';
        }
        document.querySelector('#quest-count').innerHTML = questCount + 1;
        document.querySelector('#total-quest').innerHTML = maths.length;
    }
    else {
        if (scoreCount == 0) {
            document.querySelector('#question-container').innerHTML = 'You scored '+ scoreCount + ' out of ' + questCount;
            questionScoreContainer.style.display = 'none';
            optionsContainer.style.display = 'none';
            scoreContainer.style.display = 'none';
            tryAgain.style.display = 'block';
            next.style.display = 'none';
            previous.style.display = 'none';
        }
        else {
            scoreCount--;
            document.querySelector('#question-container').innerHTML = 'You scored '+ scoreCount + ' out of ' + questCount;
            questionScoreContainer.style.display = 'none';
            optionsContainer.style.display = 'none';
            scoreContainer.style.display = 'none';
            tryAgain.style.display = 'block';
            next.style.display = 'none';
            previous.style.display = 'none';
        }
    }
}

function returnDefault() {
    optionsContainerA.style.backgroundColor = 'white';
    optionsContainerA.style.color = 'black';
    optionsContainerB.style.backgroundColor = 'white';
    optionsContainerB.style.color = 'black';
    optionsContainerC.style.backgroundColor = 'white';
    optionsContainerC.style.color = 'black';
    clickedA = false;
    clickedB = false;
    clickedC = false;
    document.querySelector('#a').disabled = false;
    document.querySelector('#b').disabled = false;
    document.querySelector('#c').disabled = false;
    document.querySelector('#a').checked = false;
    document.querySelector('#b').checked = false;
    document.querySelector('#c').checked = false;
    clickCounterA = 0;
    clickCounterB = 0;
    clickCounterC = 0;
}