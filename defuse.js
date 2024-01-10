let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");

let countdown = 10;
let intervalid = setInterval(function(){
    countdown= countdown-1;
    timerEl.textContent=countdown;

    if (countdown===0){
        timerEl.textContent="BOOM !!";
        clearInterval(intervalid);
    }
},1000);

defuserEl.addEventListener("keydown", function(event){
    let bombDefuseText = defuserEl.value ;

    if (event.key === "Enter" && bombDefuseText === "defuse" && countdown !== 0){
        timerEl.textContent="Hey Gayatri you did it !!";
        clearInterval(intervalid);
    }
});
