const grid=document.querySelector('.grid')

function randomColor(){
  let R=Math.floor(Math.random()*256);
  let G=Math.floor(Math.random()*256);
  let B=Math.floor(Math.random()*256);
  return `RGB(${R}, ${G}, ${B})`
}

function newSketch(size,type){
  grid.innerHTML=''
  grid.style.gridTemplate=`repeat(${size},1fr)/repeat(${size},1fr)`;//adjust grid size
  for(i=0;i<size**2;i++){
    const box=document.createElement('div');
    box.classList.add('box');
    grid.appendChild(box);
  }
  const boxes=document.querySelectorAll('.box')
  boxes.forEach((box)=>{box.addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor=type=='normal'?'#444':`${randomColor()}`
  })})


}
newSketch(10,'normal')
