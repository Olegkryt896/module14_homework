const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const text = document.querySelector('.text')
const btn = document.querySelector('.button')
console.log("🚀 ~ file: zadanie4.js:5 ~ btn", btn)
const resultNode = document.querySelector('.j-result');
const btnClear = document.querySelector('.btn__clear')

btn.addEventListener('click', () => {
  const value1 = document.querySelector('.input1').value;
  const value2 = document.querySelector('.input2').value;
  if (value1 < 100 || value1 > 300 || value2 < 100 || value2 > 300) {
    text.innerText = 'одно из чисел вне диапазона от 100 до 300'
  }
  else { 
    fetch(`https://picsum.photos/${value1}/${value2}`)
    .then((response) => {
      resultNode.style.backgroundImage = `url(${response.url})`
      resultNode.style.width = `${value1}px`
      resultNode.style.height = `${value2}px`
    })
    // .then((data) => {
    //   // Объект результата в формате JSON
    //   console.log(data);
    // })
    .catch(() => { console.log('error') });
  }
})

btnClear.addEventListener('click', () => {
  text.innerText = '' 
  resultNode.innerHTML = ''
  resultNode.style.backgroundImage = ''
 })
