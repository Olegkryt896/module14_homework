const input = document.querySelector('.number')
const text = document.querySelector('.text')
const btn = document.querySelector('.button')
const btnClear = document.querySelector('.btn__clear')

const resultNode = document.querySelector('.j-result');


let myJSON 
let result 




function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      result = JSON.parse(xhr.response);
      myJSON =  localStorage.setItem('myJSON', JSON.stringify(result))
      console.log(result)
      console.log(JSON.parse(localStorage.getItem('myJSON')))
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};




function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card" width:100px height:100px>
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
}





btn.addEventListener('click', () => {

  

    


  const value1 = document.querySelector('.input1').value;

  const value2 = document.querySelector('.input2').value;
  
  if (value1 > 10 || value1 < 1) { 
    if (value2 > 10 || value2 < 1) text.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10'
    else text.innerText = 'Номер страницы вне диапазона от 1 до 10'
  }

  else if (value2 > 10 || value2 < 1 ) {
    if (value1 > 10 || value1 < 1) text.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10'
    else text.innerText = 'Лимит вне диапазона от 1 до 10'
  }

  
  
  else { 
    
      useRequest(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`, displayResult);
     
  }

})

btnClear.addEventListener('click', () => {
 text.innerText = '' 
 resultNode.innerHTML = ''
})

let JSONset = JSON.parse(localStorage.getItem('myJSON'))
console.log("🚀 ~ file: zadanie3.js:106 ~ JSONset", JSONset)

document.addEventListener('DOMContentLoaded', () => {
  if (JSONset) { 
    displayResult (JSONset)
  }
  else console.log('JSON нет')
})