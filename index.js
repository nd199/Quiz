const correctAnswer = ['A','A', 'B','B'];
const form = document.querySelector(".quiz-form");
const res  = document.querySelector('.result');
const ques  = document.querySelectorAll('.question');


form.addEventListener("submit", event => {
    event.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, 
        form.q3.value, form.q4.value];

    userAnswers.forEach((answer,index) =>{
        if(answer === correctAnswer[index])
        {   
            score++;
            ques[index].classList.add('correct');
        }
        else{
            ques[index].classList.add('wrong');
        }
        scrollTo(0,0);
        res.classList.remove('hidden');
        res.querySelector('p').textContent = `You scored : ${score}/4 !`;
    });
});  

