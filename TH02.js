const quizData = [
    { question: "Loài cây nào được mệnh danh là 'vua của các loại trái cây'?", options: ["Xoài", "Sầu riêng", "Nhãn", "Mận"], answer: "Sầu riêng", hints: ["Mùi rất đặc trưng.", "Có gai bên ngoài vỏ."] },
    { question: "Hành tinh nào gần mặt trời nhất?", options: ["Trái Đất", "Sao Hỏa", "Sao Thủy", "Sao Kim"], answer: "Sao Thủy", hints: ["Hành tinh nhỏ nhất trong hệ mặt trời.", "Có quỹ đạo gần nhất với Mặt Trời."] },
    { question: "Ai là người phát minh ra bóng đèn?", options: ["Newton", "Einstein", "Edison", "Galileo"], answer: "Edison", hints: ["Ông là một nhà phát minh vĩ đại.", "Tên của ông bắt đầu bằng chữ 'E'."] },
    { question: "Nước nào có diện tích lớn nhất thế giới?", options: ["Mỹ", "Nga", "Trung Quốc", "Canada"], answer: "Nga", hints: ["Lãnh thổ trải dài từ châu Âu sang châu Á.", "Quốc gia này có diện tích hơn 17 triệu km²."] },
    { question: "Quốc gia nào có mật độ dân số cao nhất?", options: ["Ấn Độ", "Singapore", "Trung Quốc", "Bangladesh"], answer: "Bangladesh", hints: ["Một quốc gia có diện tích nhỏ và dân số đông đúc."] },
    { question: "Đội bóng nào giành chức vô địch World Cup năm 2018?", options: ["Pháp", "Brazil", "Argentina", "Bỉ"], answer: "Pháp", hints: ["Đội bóng này đã chiến thắng trong trận chung kết với Croatia."] },
    { question: "Người sáng lập ra Apple Inc. là ai?", options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"], answer: "Steve Jobs", hints: ["Ông là người sáng lập cùng với Steve Wozniak."] },
    { question: "Đại dương nào là lớn nhất trên thế giới?", options: ["Thái Bình Dương", "Ấn Độ Dương", "Đại Tây Dương", "Bắc Băng Dương"], answer: "Thái Bình Dương", hints: ["Đại dương này chiếm khoảng 1/3 diện tích bề mặt Trái Đất."] },
    { question: "Hãy chọn loài động vật có vú duy nhất biết bay?", options: ["Dơi", "Chim", "Cá voi", "Bướm"], answer: "Dơi", hints: ["Chúng có thể bay và là động vật có vú duy nhất làm được điều này."] },
    { question: "Quốc gia nào có kim tự tháp?", options: ["Ai Cập", "Mexico", "Hy Lạp", "Nhật Bản"], answer: "Ai Cập", hints: ["Nơi đây có các kim tự tháp nổi tiếng như kim tự tháp Giza."] },
];

let currentQuestionIndex = 0;
let score = 0;
let attempt = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    attempt = 0;
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    feedbackElement.textContent = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(button, option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(button, selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        button.classList.add("correct");
        score += 10;
        scoreElement.textContent = `Điểm: ${score}`;
        setTimeout(nextQuestion, 2000);
    } else {
        if (attempt < 2) {
            button.classList.add("wrong");
            feedbackElement.innerHTML = `Sai! Gợi ý: ${currentQuestion.hints[attempt]}`;
            feedbackElement.style.color = "red";
            attempt++;
        } else {
            button.classList.add("wrong");
            feedbackElement.innerHTML = `Sai rồi! Đáp án đúng là: <span style="color: green;">${currentQuestion.answer}</span>`;
            setTimeout(nextQuestion, 2000);
        }
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "Bạn đã hoàn thành trò chơi!";
        optionsElement.innerHTML = "";
    }
}

loadQuestion();