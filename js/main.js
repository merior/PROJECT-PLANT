'use strict'

const named = document.querySelector('#name')
const text = document.querySelector('#text')
const select = document.querySelector('select')
const age = document.querySelector('#age')
const clas = document.querySelector('#class')
const size = document.querySelector('#size')
const danger = document.querySelector('.danger')
const habitat = document.querySelector('#habitat')
const area = document.querySelector('#area')
const first = document.querySelector('#first')
const table = document.querySelector('table')

const button = document.querySelector('#button')

let array = []

const getArray = () => {
    array = JSON.parse(localStorage.getItem('item')) || []
}


const toLocalStorage = (array) => {
    localStorage.setItem ("item", JSON.stringify(array))
   }


const render = () => {  
    getArray()
    table.innerHTML = '<tr><th>название</th><th>описание</th><th>тип растения</th><th>возраст</th><th>класс</th><th>размер соцветия</th><th>класс опасности</th><th>ареал произрастания</th><th>область применения</th><th>первооткрыватель</th></tr>'

    array.forEach((item, index) => {
        if(item.namee != '' & item.texts != '' & item.select != '' & item.age != '' & item.clas != '' & item.size != '' & item.danger != '' & item.habitat != '' & item.area != '' & item.first != '') {
            const tr = document.createElement('tr')

            tr.innerHTML = '<td>' + item.namee + '</td><td>' + item.texts + '</td><td>' + item.select + '</td><td>' + item.age + '</td><td>' + item.clas + '</td><td>' + item.size + '</td><td>' + item.danger + '</td><td>'+ item.habitat + '</td><td>' + item.area + '</td><td>' + item.first + '</td>'+'<td class="del">Удалить</td>'

            table.append(tr)

            tr.querySelector('.del').addEventListener('click', () => {
                tr.remove()
                array.splice(index, 1)
                localStorage.setItem('item', JSON.stringify(array))
            })
            
        }
    })
}

button.addEventListener('click', (event) => {
    
    event.preventDefault()
    
    const newPlant = {
    namee: named.value,
    texts: text.value,
    select: select.value,
    age: age.value,
    clas: clas.value,
    size: size.value,
    danger: danger.value,
    habitat: habitat.value,
    area: area.value,
    first: first.value
    }

    console.log(array)

    if (newPlant.namee != '' & newPlant.texts != '' & newPlant.select != '' & newPlant.age != '' & newPlant.clas != '' & newPlant.size != '' & newPlant.danger != '' & newPlant.habitat != '' & newPlant.area != '' & newPlant.first != '') {
        
        array.push(newPlant)
        toLocalStorage(array)

        console.log(array)

        named.value = ' '
        text.value = ' '
        select.value = 0
        age.value = ' '
        clas.value = ' '
        size.value = ' '
        danger.value = 0
        habitat.value = ' '
        area.value = ' '
        first.value = ' '
    }

    render()
})

render()





