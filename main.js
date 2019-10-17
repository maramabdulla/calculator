
 var firstnum=0 ;
 var second=0 ;
 var third=0;
var s=document.getElementsByTagName("button");
var result= document.getElementById("result");
//////////////////////////////////////////////////////
const index =[4 , 5 , 6 , 8 , 9 , 10 , 12 , 13 , 14 , 16 , 17  ];
const p=[3 , 7 , 11 , 15 ];
//////////////////////////////////////////////////////
s[18].addEventListener("click" ,equal);
s[2].addEventListener("click" ,mod);
s[1].addEventListener("click" ,pm);
s[0].addEventListener("click", clear);
////////////////////////////////////////////
 index.forEach(r=>s[r].addEventListener("click" , clickNumber));
 p.forEach(r=>s[r].addEventListener("click" , secondnumber));
 ////////////////////////////////////////////
 function mod (){ firstnum/=100 ; result.innerHTML=firstnum; }
function zz (){ firstnum=0 ; second=0 ; result.innerHTML= "" ; }
function pm (){ firstnum*=-1 ; result.innerHTML=firstnum ; }
  function clickNumber (event){
      
   firstnum += event.target.lastChild.data; 
   firstnum*=1;
   result.innerHTML=firstnum ;
   
   
  }
  function secondnumber (event){
       second = firstnum;
      third =event.target.lastChild.data;
      result.innerHTML=third;
      firstnum =0
      console.log(second,firstnum)
  }
  
  function clear (){
      firstnum=0 ; 
      result.innerHTML=" ";
  }
function equal (){
   
    switch(third){
        case '+': firstnum=firstnum*1+second*1  ; break ; 
        case '-': firstnum=second*1 -firstnum*1   ; break ;
        case 'x': firstnum=second*firstnum  ; break ;
        case '/': firstnum=second/firstnum ; break ; }
        result.innerHTML = firstnum ;

        console.log(firstnum);
    }


