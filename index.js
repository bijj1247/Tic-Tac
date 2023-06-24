var count = 0
game = true
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var btn5 = document.getElementById("btn5")
var btn6 = document.getElementById("btn6")
var btn7 = document.getElementById("btn7")
var btn8 = document.getElementById("btn8")
var btn9 = document.getElementById("btn9")
var turn = document.getElementById("turn")
var buttons = document.querySelectorAll("button")
var win = document.getElementById("win")
function showresult(symbol){
    if(symbol == "X"){
        win.innerHTML = "Player 1 has Won!"
     }
    else{
         win.innerHTML = "Player 2 has Won!"
     }
}
function gameover(){
    message = document.getElementById("message")
    message.innerHTML = "Game Over Restart To Play Again"
    setTimeout(() =>{message.innerHTML=""
    },1000)

}
function winer(){
    if (btn1.innerHTML == btn2.innerHTML && btn2.innerHTML == btn3.innerHTML && btn1.innerHTML !== ""){
        var sym = btn1.innerHTML
        showresult(sym)  
        game = false;
    }
    else if(btn4.innerHTML == btn5.innerHTML && btn5.innerHTML == btn6.innerHTML && btn6.innerHTML !== ""){
        var sym = btn4.innerHTML
        showresult(sym)
        game = false;
      }
    else if(btn7.innerHTML == btn8.innerHTML && btn8.innerHTML == btn9.innerHTML && btn9.innerHTML !== ""){
        var sym = btn7.innerHTML 
        showresult(sym) 
        game = false; 
      }
    else if(btn1.innerHTML == btn4.innerHTML && btn4.innerHTML == btn7.innerHTML && btn7.innerHTML !== ""){
        var sym = btn1.innerHTML
        showresult(sym)
        game = false;
    }
    else if(btn2.innerHTML == btn5.innerHTML && btn5.innerHTML == btn8.innerHTML && btn8.innerHTML !== ""){
        var sym = btn2.innerHTML
        showresult(sym)
        game = false;
    }
    else if(btn3.innerHTML == btn6.innerHTML && btn6.innerHTML == btn9.innerHTML && btn9.innerHTML !== ""){
        var sym = btn3.innerHTML
        showresult(sym)
        game = false;
    }
    else if(btn1.innerHTML == btn5.innerHTML && btn5.innerHTML ==  btn9.innerHTML && btn9.innerHTML !=="")
    {
        var sym = btn1.innerHTML
        showresult(sym)
        game = false;
    }
    else if(btn3.innerHTML == btn5.innerHTML && btn5.innerHTML ==  btn7.innerHTML && btn7.innerHTML !==""){
        var sym = btn3.innerHTML
        showresult(sym)
        game = false;
    }
    else if(count == 8)
    {
        gameover()
    }

}
function showmessage(){
    message = document.getElementById("message")
        message.innerHTML = "THE BOX IS ALREADY FILLED"
    setTimeout(() =>{message.innerHTML=""
        
    },1000)
}
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.innerHTML =="Play Again"){
            location.reload()
        }
        else{
            if(game == false){
                gameover()
            }
             else if(button.innerHTML =="X" || button.innerHTML=="O" ){
                showmessage();
            }
            else{
            if(count%2 == 0){
                turn.innerHTML = "Player 2's turn"
                button.innerHTML ="X"
                count++;
                winer()
            }
            else{
                turn.innerHTML = "Player 1's turn"
                button.innerHTML = "O"
                count++
                winer()
            }
        }

        }
    })
})