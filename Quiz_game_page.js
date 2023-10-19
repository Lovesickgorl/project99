


function send(){
     document.getElementById("number1").value;
     document.getElementById("number2").value;
actaul_awnser=parseInt(number1)*parseInt(number2).value;

     question_number= "<h4>"+ number1+ "X" + number2+"</h4>";
input_box="<br> Awnser:<input type='text' id='input_check_box'>";
     check_button="<br><br><button class='btn btn-info' onclick='check()'> Check</button>";
     row=question_word+input_box+check_button;
     document.getElementById("output").innerHTML=row;
     document.getElementById("number1").value="";
     document.getElementById("number2").value="";

}
var question_turn = "player1";
var awnser_turn = "player2";
function check()
{
     get_awnser=document.getElementById("input_check_box").value;
     awnser=get_awnser.toLowerCase();
     console.log("awnser in lower case -" + awnser);
     if(awnser==word)
     {
          if(awnser_turn=="player1")
          {
               player1_score=player1_score +1;
               document.getElementById("player1_score").innerHTML=player1_score;
          }
          else
          {
               player2_score=player2_score +1;
               document.getElementById("player2_score").innerHTML=player2_score;
          }
     }

     if(question_turn=="player1")
{
     question_turn="player2"
     document.getElementById("player_question").innerHTML="Question Turn-"+ player2_name;
}
else
{
     question_turn="player1"
     document.getElementById("player_question").innerHTML="Question Turn-"+ player1_name;
}
if(awnser_turn=="player1")
{
     awnser_turn="player2"
     document.getElementById("player_awnser").innerHTML="Awnser Turn - "+ player2_name; 
}
else
{
     awnser_turn="player1"
     document.getElementById("player_awnser").innerHTML="Awnser Turn - "+ player1_name; 
}
document.getElementById("output").innerHTML="";
}
