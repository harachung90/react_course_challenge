import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <nav className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h3>ReactFacts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
            <body className="App-body">
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </body>
        </div>
    )
        ;
}

export default App;
