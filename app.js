

// Tạo mảng random
const randomArray = dataQuestions.sort(() => Math.random() - 0.5);
console.log(randomArray)
let array=[]
let selectAnswer=[]
let answer=[]
let index=0
let dung=0
let sai=0
let point=10
const root=document.getElementById('root')
console.log(root)
const textQuestion=document.getElementById("question")
const answerA=document.getElementById("A")
const answerB=document.getElementById("B")
const answerC=document.getElementById("C")
const answerD=document.getElementById("D")
const yes=document.getElementById("yes")
const no=document.getElementById("no")


function render(arr,i){
    textQuestion.innerHTML=arr[i].question
    const randomAnswer = arr[i].answer.sort(() => Math.random() - 0.5);
    answer.push(randomAnswer)
    console.log(answer)
    console.log(randomAnswer)
    answerA.innerHTML=randomAnswer[0].replay
    answerB.innerHTML=randomAnswer[1].replay
    answerC.innerHTML=randomAnswer[2].replay
    answerD.innerHTML=randomAnswer[3].replay
}
render(randomArray,index)

function check(event) {
    const selectedAnswer = event.target.innerHTML;
    console.log(selectedAnswer)
    const correctAnswer = randomArray[index].answer.find(answer => answer.key === true).replay;
    if (selectedAnswer === correctAnswer) {
      dung=dung+1
      yes.innerHTML=`Đúng:${dung}`
    } else {
      sai=sai+1
      no.innerHTML=`Sai:${sai}`
      array.push(index)
      selectAnswer.push(selectedAnswer)
    }
    index=index+1
    if(index >= dataQuestions.length){
       return consequen()
     }
    render(randomArray,index)
  }
  
  function consequen(){
    // textQuestion.classList.add("none")
    // answerA.classList.add("none")
    // answerB.classList.add("none")
    // answerC.classList.add("none")
    // answerD.classList.add("none")
    // no.classList.add("none")
    // yes.classList.add("none")
    console.log(textQuestion)
    console.log(randomArray)
    console.log(array)
    point-=(10/randomArray.length)*sai
    root.innerHTML=`<p id="progress">Hoàn thành</p>
       <p id='point'>Điểm:${point}</p>
       <div>
       <h3 id="yes" class="Btn Btn-dung">Đúng:${dung}</h3>
       <h3 id="no" class="Btn">Sai:${sai}</h3>
       </div>
        `
        if(sai!==0){
          root.innerHTML+=`<button id="check">Kiểm tra câu sai</button>`
          const checkR=document.getElementById("check")
          checkR.addEventListener("click",function(){
            index=0
            render1()
          })
        }
        
  }

  function next(){
    if(index>=array.length-1){
      return
    }
    index+=1
    render1()
  }

  function back(){
    if(index<0){
      return
    }
    index-=1
    render1()
  }

  function render1(){
    textQuestion.textContent=randomArray[array[index]].question
    console.log(index)
    console.log(randomArray[array[index]].question)
    root.innerHTML=`<p id="question" class="question">${textQuestion.textContent}</p>
    <div>
      <button id="A" class="btn"></button>
      <button id="B" class="btn"></button>
      <button id="C" class="btn"></button>
      <button id="D" class="btn"></button>
   </div>
   <div>
      <button id="Back" class="Btn" onclick="back()">Back</button>
      <button id="Next" class="Btn Btn-dung" onclick="next()">Next</button>
   </div>
   `
  }