


// Задание 1 Преобразовать xml в JS

const parser = new DOMParser();

const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");


const bookNode = xmlDOM.querySelector("list");
console.log("🚀 ~ file: Zamskaniya.js:129 ~ bookNode", bookNode)

const first = bookNode.querySelectorAll("first");
console.log("🚀 ~ file: Zamskaniya.js:131 ~ first", first)

console.log(first[1].textContent)

const second = bookNode.querySelectorAll("second");
const age = bookNode.querySelectorAll("age");
const prof = bookNode.querySelectorAll("prof");


const name = bookNode.querySelectorAll('name');
const lang1 = name[0].getAttribute('lang')
console.log("🚀 ~ file: Zamskaniya.js:142 ~ lang1", lang1)
const lang2 = name[1].getAttribute('lang')
console.log("🚀 ~ file: Zamskaniya.js:144 ~ lang2", lang2)


const result = { 
  list: [
    {name: first[0].textContent, age:  age[0].textContent, prof: prof[0].textContent, lang: lang1},
    {name: first[1].textContent, age:  age[1].textContent, prof: prof[1].textContent, lang: lang2}
  ]
}

console.log(typeof result)

console.log(result)


// Задание 2 Преобразовать json в JS 



const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
}
`

const data = JSON.parse(jsonString);

const list = data.list;
console.log(list)

const result2 = { 
  list
}

console.log(result2)




