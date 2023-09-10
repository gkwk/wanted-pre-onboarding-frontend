import logo from '../logo.svg';
import '../App.css';

function Main() {
    var title = "React Project"


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <h1>{ title }</h1>
                <p>{ "react" }</p>
                <p>{ 10 }</p>
                <p>{ [1,2,3,4,5] }</p>
                <p>{ Math.random() *100 }</p>
                <p></p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
    );
}

export default Main;