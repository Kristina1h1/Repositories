import cover19 from './adele19.png';
import cover21 from './adele21.png';
import cover25 from './adele25.png';
import "./Album.css";


const covers = {
    "19": cover19,
    "21": cover21,
    "25": cover25
};

function Album({
    name, artist, year, label, genre, tracks, songs
}) {
    const cover = covers[name] || cover21;
    return (
        <div className="album-card">
            <div className='album-top'>
                <img src={cover} alt={name} className="album-cover" />

                <div className="album-info">
                    <h2>{name}</h2>
                    <p><b>Исполнитель:</b> {artist}</p>
                    <p><b>Год издания:</b> {year}</p>
                    <p><b>Издатель:</b> {label}</p>
                    <p><b>Жанр:</b> {genre}</p>
                    <p><b>Треков:</b> {tracks}</p>
                </div>
            </div>

            <div className="album-tracklist">
                <h3>Треклист</h3>
                <ul className="album-songs">
                    {songs.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Album;