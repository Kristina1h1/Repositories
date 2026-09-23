import './Article.css';

function Article() {
    return (
        <article className="article">
            <h2>О городе</h2>
            <p>Страна: Россия</p>
            <p>Год основания: 1135</p>
            <p>
                Тверь - древний русский город на берегах Волги,
                административный центр Тверской области.
                Расположен примерно в 180 км от Москвы. Сегодня Тверь - крупный областной центр
                с богатой историей и красивой набережной. Город входит
                в "Золотое кольцо России" и привлекает туристов старинной
                архитектурой и волжскими пейзажами.
            </p>

            <h3>Достопримечательности</h3>
            <div className="gallery">
                <div className="card">
                    <img src="https://tripplanet.ru/wp-content/uploads/europe/russia/tver/imperial-travel-palace-tver.jpg" alt="Путевой дворец" />
                    <p>Путевой дворец</p>
                </div>
                <div className="card">
                    <img src="https://tripplanet.ru/wp-content/uploads/europe/russia/tver/embankment-athanasius-nikitina-tver.jpg" alt="Набережная Афанасия Никитина" />
                    <p>Набережная Афанасия Никитина</p>
                </div>
                <div className="card">
                    <img src="https://tripplanet.ru/wp-content/uploads/europe/russia/tver/gorsad-tver.jpg" alt="Городской сад" />
                    <p>Городской сад</p>
                </div>
                <div className="card">
                    <img src="https://tripplanet.ru/wp-content/uploads/europe/russia/tver/monument-to-athanasius-nikitin-tver.jpg" alt="Памятник Афанасию Никитину" />
                    <p>Памятник Афанасию Никитину</p>
                </div>
                <div className="card">
                    <img src="https://tripplanet.ru/wp-content/uploads/europe/russia/tver/nativity-of-christ-cathedral.jpg" alt="Христорождественский собор" />
                    <p>Христорождественский собор</p>
                </div>
                <div className="card">
                    <img src="https://tripplanet.ru/wp-content/uploads/europe/russia/tver/st-catherines-monastery-tver.jpg" alt="Свято-Екатерининский женский монастырь" />
                    <p>Свято-Екатерининский женский монастырь</p>
                </div>
            </div>
        </article>
    );
}
export default Article;