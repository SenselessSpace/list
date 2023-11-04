// class box {

//   _age = 0

//   constructor(name, age) {
//     console.log("Создание");
//     this.name = name
//     this.age = age
//   }


//   hi() {
//     console.log ('Привет ' + ", " + this.name)  ;
//   }

//   set age(value) {
//     this._age = value
//     console.log(2022 - this._age);
//   }
//   get age () {
//     return this._age
//   }
// }

// let myBox = new box('Вика', 16)
// let myBox2 = new box('Кирилл', 17)
// let myBox3 = new box('Пидр', 16)

// myBox.age = 21

// myBox3.hi()

// console.log(myBox instanceof box);










import { ToDo } from "./ToDo.js"



let app = new ToDo(document.getElementById("app"))
app.addUser('work', 'my')
app.addUser('dsadsa', 'my')

app.currentUser = 'my'
console.log (app);



// let newNote = new Note(document.getElementById('app'), prompt('Названия дела'))
// document.getElementById('action').addEventListener('click', function() {
//   let newNote = new Note(document.getElementById('app'), prompt('Названия дела'))
// })
// document.getElementById('action').addEventListener('click', function () {
//   newList.add(prompt('Названия дела? '))
//   console.log(newList)
// })





