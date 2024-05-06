let questions = [
    {
    question: "Год начала великой отечественной войны?",
    options: ["1939", "1943", "1941", "1940"],
    correctAnswer: "1941"
    },
    {
    question: "Как назывался пан вторжения в СССР?",
    options: ["План Барбаросса", "План Шлиффена", "План Рейха", "План План Маршалла"],
    correctAnswer: "План Барбаросса"
    },
    {
    question: "Какое имя и фамиля зашифрованы в названии советского танка ИС?",
    options: ["Иван Степанов", "Иосиф Сталин", "Илья Стародубов", "Игорь Столыпин"],
    correctAnswer: "Иосиф Сталин"
    },
    {
    question: "Назови город-герой, который ни разу за всю историю своего существования не был захвачен вражескими войсками?",
    options: ["Смоленск", "Севастополь", "Сталинград", "Ленинград"],
    correctAnswer: "Ленинград"
    },
    {
    question: "Назовите самое крупное танковое сражение в истории, имевшее место в ВОВ?",
    options: ["Московская битва", "Курская битва", "Битва при Молодях", "Полтавская битва"],
    correctAnswer: "Курская битва"
    },
    {
    question: "Чей голос звучал по Всесоюзному радои, оповещая о начале ВОВ?",
    options: ["Левитана Ю.Б.", "Сталин И.В.", "Махно Н.И.", "Троцкий Л.Д."],
    correctAnswer: "Левитана Ю.Б."
    },
    {
    question: "Город-герой, который 3-жды менял своё название?",
    options: ["Новосибирск", "Екатеринбург", "Волгоград", "Тула"],
    correctAnswer: "Волгоград"
    },
    {
    question: "По льду какого озера проходила Дорога жизни, которая была проложена для снобжения блокадного Ленинграда?",
    options: ["Ладожское", "Байкал", "Телецкое", "Виктория"],
    correctAnswer: "Ладожское"
    },
    {
    question: "Какое важное событие произошло 2 мая 1945г.?",
    options: ["Захват Берлина", "Подписание мирного договора", "Смерть Иосифа С.", "Победа Германии"],
    correctAnswer: "Захват Берлина"
    },
    {
    question: "какому полководцу народ присвоил почётное звание Маршала Победы?",
    options: ["Будённый С.М.", "Юденич Н.Н.", "Жуков Г.К.", "Тухочёвский М.Н."],
    correctAnswer: "Жуков Г.К"
    },
    ];

    let currentQuestion = 0;
    let correctAnswers = 0;
    // функция для отображения вопроса с ответами
    function displayQuestion() {
    let questionElement = document.getElementById("question");
    questionElement.textContent = `Вопрос ${currentQuestion+1}: ${questions[currentQuestion].question}`
    let optionsElement = document.getElementById("options");
    //очистка
    optionsElement.innerHTML = "";
    //масив ответов
    let optionsArray = questions[currentQuestion].options;
    //создаём кнопки с ответами и привязываем к ним функцию nextquestion
    optionsArray.forEach((option)=>{
        let button = document.createElement('button');
        optionsElement.append(button);
        button.textContent = option;
    })
    // при клике на блок с кнопками:
    optionsElement.addEventListener('click', (event)=> {
    // получаем переменную кнопку на которую кликнули
        let target = event.target;
        nextQuestion(target.textContent);
    // вызовем функцию проверки ответа и перехода к следующему вопросу
    }, { once: true })
}

    // функция для перехода к следующему вопросу
    function nextQuestion(answer) {
    // если переданный ответ = корректному, то 
        if(answer === questions[currentQuestion].correctAnswer) {
    // Увеличиваем на единицу кол-во верных ответов
            correctAnswers++;
    }

    currentQuestion++; // переход к следующему вопросу
    if(currentQuestion < questions.length) { // если № текущего вопроса меньше кол-ва вопросов то отображаем следующий вопрос
        displayQuestion();
    } else {
        // иначе отобразить результат теста
       displayResult()
    }
}

// функция отображения результата теста
function displayResult() {
    let username = document.getElementById("name").value
    let scores = 2;
    if(correctAnswers == 5) {scores = scores + 1;}
    if(correctAnswers == 6) {scores = scores + 1;}   
    if(correctAnswers == 7) {scores = scores + 2;}
    if(correctAnswers == 8) {scores = scores + 2;}
    if(correctAnswers == 9) {scores = scores + 3;}
    if(correctAnswers == 10) {scores = scores + 3;}
    let procent = 0;
    if(correctAnswers == 1) {procent = procent + 10}
    if(correctAnswers == 2) {procent = procent + 20}
    if(correctAnswers == 3) {procent = procent + 30}
    if(correctAnswers == 4) {procent = procent + 40}
    if(correctAnswers == 5) {procent = procent + 50}
    if(correctAnswers == 6) {procent = procent + 60}
    if(correctAnswers == 7) {procent = procent + 70}
    if(correctAnswers == 8) {procent = procent + 80}
    if(correctAnswers == 9) {procent = procent + 90}
    if(correctAnswers == 10) {procent = procent + 100}
    const questionElement = document.getElementById("question"); //блок с вопросом
    const optionsElement = document.getElementById("options"); //Блок с вариантоми ответов
    const resultElement = document.getElementById("result"); // блок для отображения результата
    questionElement.style.display = 'none'
    optionsElement.style.display = 'none'
    resultElement.textContent = `${username}, правильных ответов: ${correctAnswers}, (${procent}%) из ${questions.length}, оценка ${scores}`;
}


displayQuestion();