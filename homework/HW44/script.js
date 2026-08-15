let note = document.querySelector('#note');
note.value = localStorage.getItem('note');
note.addEventListener('input', function () { //сохраняет значение при каждом изменении
    localStorage.setItem('note', note.value);
});