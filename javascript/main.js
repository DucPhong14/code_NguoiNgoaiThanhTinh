let Determine = document.getElementById("Determine")

Determine.addEventListener("click", onclick);

function onclick(){
    var question__1 = document.getElementById("question__1");
    var answer1 = question__1.options[question__1.selectedIndex].text;
    var question__2 = document.getElementById("question__2");
    var answer2 = question__2.options[question__2.selectedIndex].text;
    var question__3 = document.getElementById("question__3");
    var answer3 = question__3.options[question__3.selectedIndex].text;

    var title_answer = document.getElementById("title_answer");
    var text_anwser = document.getElementById("text_anwser");
    var img = document.getElementById("img");

    if(answer1 == "Yes,I usually talk with them" && answer2 == "What is eat?" && answer3 == "He is my friend"){
        title_answer.textContent = "you are ....";
        text_anwser.textContent = "you are ....";
        img.src = '../img/1.jpg';
    }else if(answer1 == "Never" && answer2 == "Yes, I eat when I hungry" && answer3 == "I eat every thing"){
        title_answer.textContent = "you are2 ....";
        text_anwser.textContent = "you are2 ....";
        img.src = '../img/2.jpg';
    }else{
        title_answer.textContent = "you are3 ....";
        text_anwser.textContent = "you are3 ....";
        img.src = '../img/3.jfif';
    }
    
}