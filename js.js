var img1 = new Image();
img1.src = "1.png";
let img2 = new Image();
img2.src = "2.png";
let img3 = new Image();
img3.src = "3.png";
let img4 = new Image();
img4.src = "4.png";

let quest = [img1, img2, img3, img4];
let right_answer = [a2, a5, a4, a3]

let num_img = 0;
let num_ans = 0;
let sum = 0;

document.body.appendChild(quest[num_img]);

btn.addEventListener("click", check);
function check(){
    document.body.removeChild(quest[num_img]);
    num_img++;
    document.body.appendChild(quest[num_img]);
    }

btn.addEventListener("click", img);
function img(){
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    console.log(a4.checked);
    if (right_answer[num_ans].checked){  
        alert("true +1");
        sum++;
    } else {
        alert("false +0");
    }
    num_ans++;
if (num_ans == right_answer.length){
    document.body.remove(table);
    alert("Кількість балів:" + sum);
    }
}
