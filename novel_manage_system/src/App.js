import Home from "./home/Home";
import {Route, Routes} from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/footer";
import Novel from "./novel/novel";
import Sect from "./sect/sect";
import Person from "./person/person";
import Road from "./road/road";
import Skill from "./skill/skill";
import Treasure from "./treasure/treasure";
import Weapons from "./weapons/weapons";
import './App.css';

function App() {
    return (
        <>
            <div className="App">
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="novel" element={<Novel/>}/>
                    <Route path="sect" element={<Sect/>}/>
                    <Route path={"/person"} element={<Person/>}/>
                    <Route path={"/road"} element={<Road/>}/>
                    <Route path={"/skill"} component={<Skill/>}/>
                    <Route path={"/treasure"} element={<Treasure/>}/>
                    <Route path={"/weapons"} element={<Weapons/>}/>
                </Routes>
                <Footer/>
            </div>
        </>
    )
}

// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
