window.addEventListener('DOMContentLoaded', () => {
  const lineWrapper = document.querySelector('.remainder-decor')
  let countLine = lineWrapper.dataset.countLine;
  let countAcitveLine = lineWrapper.dataset.countActiveLine;
  createLine(countLine, countAcitveLine, lineWrapper)
})

function createLine(countLine, countActiveLine, wrapperLine) {
  for(let i = 0; i < countLine; i++){
    if(i < countActiveLine){
      wrapperLine.innerHTML += `
    <span class="remainder-decor__line accent-line db"></span>
    `
    }else{
      wrapperLine.innerHTML += `
    <span class="remainder-decor__line db"></span>
    `
    }
    
  }
}