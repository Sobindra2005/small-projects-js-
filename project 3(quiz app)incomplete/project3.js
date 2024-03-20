
let questions=[

{
    question:" Besides Sachin Tendulkar, who is the only other Indian cricketer to have scored over 13,000 runs in test cricket ?"
    ,options:[
    {
        option:'Virat kohli', correct:'false'
    },
    {
        option:'sunil gavaskar',correct:'false'
    }
    ,
    {
        option:'VVS laxman',correct:'false'
    },
    {
        option:'rahul drevid',correct:'true'
    }
]
},
{
    question:"What colour did Lord Shiva's throat turn into when he drank the deadly poison during Samudra Manthan?"
    ,options:[
    {
        option:'red', correct:'false'
    },
    {
        option:'yellow',correct:'false'
    }
    ,
    {
        option:'blue',correct:'true'
    },
    {
        option:'black',correct:'false'
    }
]
},
{
    question:"  What is the profession of Kabir in the film Kabir Singh?"
    ,options:[
    {
        option:'engineer', correct:'false'
    },
    {
        option:'cricketer',correct:'false'
    }
    ,
    {
        option:'athlete',correct:'false'
    },
    {
        option:'doctor',correct:'true'
    }
]
},
{
    question:"  Which YouTuber star's real name is Ajey Nagar?"
    ,options:[
    {
        option:'carryminati', correct:'true'
    },
    {
        option:'bb ki vines',correct:'false'
    }
    ,
    {
        option:'flying beast',correct:'false'
    },
    {
        option:'total gaming',correct:'false'
    }
]
},
{
    question:" Which of these is the biggest event of WWE?"
    ,options:[
    {
        option:'Fifa worldcup', correct:'false'
    },
    {
        option:'T20 worldcup',correct:'false'
    }
    ,
    {
        option:'wrestlemania',correct:'false'
    },
    {
        option:'Royal rumble',correct:'true'
    }
]
},
{
    question:"Who is this tech entrepreneur and CEO of the electric vehicle company, Tesla?"
    ,options:[
    {
        option:'Jack Dorsey', correct:'false'
    },
    {
        option:'Elon Musk',correct:'true'
    }
    ,
    {
        option:'Drew Houston',correct:'false'
    },
    {
        option:'Brian Chesky',correct:'false'
    }
]
},
{
    question:" What is the capital city of Japan?"
    ,options:[
    {
        option:'Beijing', correct:'false'
    },
    {
        option:'seoul',correct:'false'
    }
    ,
    {
        option:'Tokyo',correct:'true'
    },
    {
        option:'Bangkok',correct:'false'
    }
]
}

]
let questionhtml=document.querySelector("#qna");
let answerList=document.querySelector("#qna1");
let nextButton=document.querySelector("#nextbtn");
let questionoption=document.querySelector("#qna1 div");

function runqna(){
   let questionindex=0;
   let score=0;
   let questionnum=questionindex + 1;
  let Question= questions[questionindex];
   questionhtml.innerHTML=`Q No. ${questionnum} :- `+ Question.question;
   for(i=0;i<4;i++){
let div=document.createElement("div");
div.innerHTML= `${i+1}.`+Question.options[i].option;
answerList.appendChild(div);
div.classList="option";
   }
   
questionoption.addEventListener("click",()=>{
    if(Question.options.correct=='true'){
        questionoption.style.backgroundColor='green';
    }
})
}


runqna();
