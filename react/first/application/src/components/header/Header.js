import "./Header.css";

function Header(props) {
    return (
        <header className="App-header">
            
            <h1>{props.title}</h1>
            <p>{props.slogan}</p>
        </header>
    )
}
export default Header;