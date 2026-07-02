        let modal = document.getElementById('modal');
        let btn = document.getElementById('btn');
        let closeBtn = document.querySelector('.close');
        let form = document.getElementById('consultationForm');

        console.log('modal:', modal);
        console.log('btn:', btn);
        console.log('closeBtn:', closeBtn);
        console.log('form:', form);

        btn.addEventListener('click', function () {
            modal.style.display = 'block';
        });

        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let question = document.getElementById('question').value;

            if (name.trim() === '' || email.trim() === '') {
                alert('Пожалуйста, заполните все обязательные поля!');
                return;
            }

            console.log('Новая заявка');
            console.log('Имя:', name);
            console.log('Email:', email);
            console.log('Вопрос:', question);

            alert('Заявка успешно отправлена!');

            modal.style.display = 'none';

            form.reset();
        });