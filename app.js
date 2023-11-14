     const questions = [
    {
        'que': 'Which of the following is a Markup Language ?',
        'a': 'PHP',
        'b': 'JavaScript',
        'c': 'HTML',
        'd': 'CSS'
        'correct': 'c',
    },
    {   'que': "What does CSS stand for ?",
        'a': "Computational Style Sheet",
        'b': "Computer Source Sheet",
        'c': "Cascade Style Sheet",
        'd': "Hyper Text Transmission Protocol",
        'correct': "c"
    },
    {
        'que': "What year was Javascript launched ?",
        'a': "1995",
        'b': "1998",
        'c': "1994",
        'd': "None Of These",
        'correct': "a"
    },
    {
        'que': "What is the full form of HTML ?",
        'a': "Hyper Text Transmission Protocol",
        'b': "Hyper Text Markup Language",
        'c': "Helicopters Terminals Motorboats Lamborginis",
        'd': "None Of The Above",
        'correct': "b",
    }

]
let index = 0;
let total = questions.length;
let right = 0;
    wrong = 0;
const quesBox =  document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText = ' ${index+1}) ${data.que}';
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer()
    console.log(ans, data.correct)
    if (ans === data.correct) {
       right++;
    }else{
       wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer; 
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }   
        } 
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false   
       }
    )
}    

const endQuiz = () => {
    document.getElementById("box").innerHTML = '
    <div style"text-align:center">
        <h3> Thank You For Participating in the Quiz</h3>
        <h2> ${right} / ${total} are correct </h2>
    </div>
    '
}
// initial call
loadQuestion();