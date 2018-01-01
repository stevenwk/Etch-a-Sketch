const grid=document.querySelector('.grid');
const gridSize=document.querySelector('input');

function randomColor(){
  let R=Math.floor(Math.random()*256);
  let G=Math.floor(Math.random()*256);
  let B=Math.floor(Math.random()*256);
  return `RGB(${R}, ${G}, ${B})`
}

function newSketch(type){
  let size=gridSize.value
  grid.innerHTML=''
  grid.style.gridTemplate=`repeat(${size},1fr)/repeat(${size},1fr)`;//adjust grid size
  for(i=0;i<size**2;i++){
    const box=document.createElement('div');
    box.classList.add('box');
    box.level=239;//initial color level
    grid.appendChild(box);
  }
  const boxes=document.querySelectorAll('.box')
  boxes.forEach((box)=>{box.addEventListener('mouseover',(e)=>{
    if (type=='level'){
      box.level-=16
      e.target.style.backgroundColor=`RGB(${box.level},${box.level},${box.level})`
    }else{
      e.target.style.backgroundColor=type=='normal'?'#444':`${randomColor()}`
  }})})


}
newSketch('normal')
