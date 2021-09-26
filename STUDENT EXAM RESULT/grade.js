alert("Student Exam Result səhifəsinə Xoş Gəlmisiniz!");
function noteResult(){
    var midtermNote,finalNote,message,average;
    midtermNote = document.getElementById("midterm").value;
    finalNote = document.getElementById("final").value;
    average = midtermNote * 0.3 + finalNote * 0.7;
    if(isNaN(midtermNote)){
        message="Keçərli bir qiymət yazın";
    }
    else if(isNaN(finalNote)){
        message="Keçərli bir qiymət yazın"
    }
    else{
        if(average<45 && average>=0){
        message="Qiymetiniz : F"; 
        }
        else if(average>=45 && average<=60){
        message="Qiymətiniz : D"; 
        }
        else if(average>60 && average<=80){
        message="Qiymətiniz : C"; 
        }
        else if(average>80 && average<=90){
        message="Qiymətiniz : B"; 
        }
        else if(average>90 && average<=100){
        message="Qiymətiniz : A"; 
        }
        else{
        message="Xahiş olunur 0-100 arası ədədlər daxil edin"; 
        }
    }
    document.getElementById("result").innerHTML = message;
}