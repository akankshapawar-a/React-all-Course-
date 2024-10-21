import logo from './logo.svg';
import './App.css';
import  data from './data.json';
import Movie from './Components/Movie';
import Header from "./Components/Header";
function App() {
  return (
<>
<div className="App">
  <Header/>
  <div className="main">
    {
      data.map((element,index)=>{
        return(
        <Movie
        key={index}
        title={element.Title}
         year={element.Year}
         img={element.Poster}/>
        )
      })
    }


  </div>
</div>
</>
  );
}

export default App;
