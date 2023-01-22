const input = document.querySelector('.number')
const text = document.querySelector('.text')
const btn = document.querySelector('.button')
const btnClear = document.querySelector('.btn__clear')

const resultNode = document.querySelector('.j-result');
console.log("🚀 ~ file: zadanie3.js:7 ~ resultNode", resultNode)



function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
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
  const value = document.querySelector('.input').value;
  if (value > 10 || value < 1) { 
    text.innerText = 'число вне диапазона от 1 до 10'
  }
  else { 
    useRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResult);
  }

})

btnClear.addEventListener('click', () => {
 text.innerText = '' 
 resultNode.innerHTML = ''
})