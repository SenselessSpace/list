import { NoteList } from "./NoteList.js"


export class ToDo {

  _currentUser = 'todo'
  _users = []
  _notes = null

  constructor(container) {
    this.container = container // глобальная видимость контейнера
    // добавления элементов
    this.nav = document.createElement("nav")
    this.title = document.createElement("h2");
    this.form = document.createElement("form");
    this.input = document.createElement("input");
    this.buttonWrapper = document.createElement("div");
    this.button = document.createElement("button");
    this.list = document.createElement("div");
    // добавление классов, текста 

    this.container.classList.add('pt-5', 'pb-5');
    this.nav.classList.add('mb-5', 'btn-group');
    this.form.classList.add('input-group', 'mb-3');
    this.input.classList.add('form-control');
    this.input.placeholder = 'Введите название нового дела';
    this.buttonWrapper.classList.add('input-group-append');
    this.button.classList.add('btn', 'btn-primary');
    this.button.textContent = 'Добавить дело';
    this.button.disabled = true; // не активная
    // добавление дочерних элементов и классы им  
    this.buttonWrapper.append(this.button);
    this.form.append(this.input);
    this.form.append(this.buttonWrapper);
    this.container.append(this.nav);
    this.container.append(this.title);
    this.container.append(this.form);
    this.container.append(this.list);

    // создание массив нотлисту
    this._notes = new NoteList(this.list)
    // событие для инпута 
    this.input.addEventListener("input", () => {
      // проверяет есть текст нет
      this.button.disabled = false;
      if (this.input.value.length == 0) {
        this.button.disabled = true;
      }
    })
    // система отправки 
    this.form.addEventListener('click', (e) => {
      e.preventDefault()
      // проверка текстового поля на текст
      if (!this.input.value) {
        return;
      }
      // проверка нота в коде
      if (this._notes) {
        this._notes.add(this.input.value)
      }
      // активация кнопки
      this.button.disabled = true;
      this.input.value = '';
    })

  }
  // установка пользователя 
  set currentUser(value) {
    this._currentUser = value

    let currentUser = null

    for (const user of this._users) {
      if (user.key == value) {
        currentUser = user
        user.button.classList.add('active')
      } else {
        user.button.classList.remove("active")
      }

      console.log(user)
    }

    this.title.textContent = currentUser.title

  }
  get currentUser() {
    return this._currentUser
  }

  // функция добавляния нового пользователя 
  addUser(title, key, def = []) {
    // создания кнопки пользователя
    let button = document.createElement("button")
    button.classList.add("btn", "btn-outline-primary");
    button.type = "button"
    button.textContent = title
    // кнопка переключение юзеров
    button.addEventListener('click', () => {
      this.currentUser = key;
    })

    // добавляем в конец массива 
    this._users.push({
      title: title,
      key: key,
      def: def,
      button: button,
    })

    this.nav.append(button)
  }
}