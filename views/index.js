import { items } from './items.js';

items();

let userAddForm = document.getElementById('add-user');
let createBtn = document.getElementById('create-btn');

createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userAddForm.classList.remove('add-user-no');
    userAddForm.classList.add('add-user');
});