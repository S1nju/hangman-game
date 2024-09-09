let letters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let arr = Array.from(letters);
let cont = document.getElementById('words')
let cont1=[];
for(let i =0;i<arr.length;i++){
    cont1[i]=document.createElement('div');
    cont1[i].appendChild(document.createTextNode(arr[i]));

cont1[i].classList.add('word');
    
    cont.appendChild(cont1[i])
    

}
const words = {
    programming:["php","javascript","go","scale","fortran","r","mysql","python"],
    movies: ["Prestige","Inception","parasite","Interstellar","Whiplash","Memento","Coco","Up"],
    people:["Albert Einstein","Hitchcock","Alexander","Cleopatra","Mahatma Gandhi"],
    countries:["Syria","Palestine","Yemen","Egypt","Bahrain","Qatar"]
  }
  let allkeys= Object.keys(words);
  console.log(allkeys);
  let randomkeyn= Math.floor(Math.random()*allkeys.length);
  let randomc = allkeys[randomkeyn];
  let randmcp=words[randomc];
  let asd =Math.floor(Math.random()*randmcp.length);
let randomw=randmcp[asd];
console.log(randomw);
document.getElementById('catg').appendChild(document.createTextNode(randomc));
let word = Array.from(randomw);
word.forEach((letterss)=>{
let span= document.createElement('span');


if(letterss==' '){
    span.classList.add('spacetrue');
}else{
    span.classList.add('span');}

document.getElementById('gess').appendChild(span)

})
let allspan = document.querySelectorAll(".span");
let w=0;
let c=0;
let paint=document.getElementById('painting');
let aw=Array.from(randomw.toLowerCase());
if(aw.includes(' ')){
    
    aw = aw.filter(space => space !== ' ');
    console.log(aw);
  
}


document.addEventListener('click',(e)=>{
    if(e.target.classList=='replaybtn'){
        window.location.reload();
    }else if(e.target.classList=='word')
{ 
    e.target.classList.add('clicked');
    let status=false;

let clet= e.target.innerHTML.toLowerCase();



aw.forEach((l,wi)=>{

    if(l==clet){
        status=true;
        c++;
 
     allspan.forEach((s,si)=>{
        if(si==wi){
            s.innerHTML=l;
          
           
        }
     })
    }

})

if(status==false){
    paint.classList.add('wrong-'+w);
w++;
console.log(w);


}else if(status==true){
    document.getElementById('sw').play();
} if(w==11){
document.getElementById('statuspop').style.display='flex'
    cont.classList.add('finish');
    document.getElementById('fw').play();

   
}else if( c==aw.length){document.getElementById('statuspop').style.display='flex'
     document.getElementById('sg').play();  cont.classList.add('finish');

}
}
});


