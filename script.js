const grid=document.querySelector('.grid')



function newSketch(size){
  grid.innerHTML=''
  grid.style.gridTemplate=`repeat(${size},1fr)/repeat(${size},1fr)`;//adjust grid size
  for(i=0;i<size**2;i++){
    const box=document.createElement('div');
    box.classList.add('box');
    grid.appendChild(box);
  }
  const boxes=document.querySelectorAll('.box')
  boxes.forEach((box)=>{box.addEventListener('mouseover',(e)=>{e.target.classList.add('boxTouched')})})


}
newSketch(10)
