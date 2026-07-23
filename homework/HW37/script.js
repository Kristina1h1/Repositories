class Card {
            constructor(iconSrc, title) {
                this.icon = iconSrc;
                this.title = title;
            }

            render(containerId) {
                const html = `
                    <div class="card">
                        <img class="card-icon" src="${this.icon}" alt="иконка" loading="lazy">
                        <div class="card-title">${this.title}</div>
                    </div>
                `;

                const container = document.getElementById(containerId);
                if (container) {
                    container.insertAdjacentHTML('beforeend', html);
                }
            }
        }

        const cards = [
            { icon: 'https://images.icon-icons.com/1129/PNG/512/cellphone_79786.png', title: 'Всегда на связи' },
            { icon: 'https://images.icon-icons.com/1258/PNG/512/1495574559-map-location-solid-style-01_84581.png', title: 'Находитесь рядом' },
            { icon: 'https://images.icon-icons.com/2954/PNG/512/emoji_smile_icon_185055.png', title: 'Довольные клиенты' },
            { icon: 'https://images.icon-icons.com/910/PNG/512/heart_icon-icons.com_71176.png', title: 'Работаем для вас' },
            { icon: 'https://images.icon-icons.com/3379/PNG/512/fast_the_breaking_sunset_hour_oclock_icon_212479.png', title: 'Быстрая связь' },
            { icon: 'https://images.icon-icons.com/5714/PNG_WM/256/317524_like-and-comment-icon.png', title: 'Удобная покупка' },
            { icon: 'https://images.icon-icons.com/1456/PNG/512/mbrichat_99549.png', title: 'Мессенджеры' },
            { icon: 'https://images.icon-icons.com/1732/PNG/512/iconfinder-securityprotectlockshield26-4021460_113100.png', title: 'Прозрачность' },
            { icon: 'https://images.icon-icons.com/37/PNG/512/safety_tested_3687.png', title: 'Безопасность' }
        ];

        const containerId = 'cardsContainer';
        const container = document.getElementById(containerId);
        if (container) container.innerHTML = '';

        cards.forEach(item => {
            const card = new Card(item.icon, item.title);
            card.render(containerId);
        });