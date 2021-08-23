
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

// ways to grab all updated values in the search component
import { useState } from 'react'; 


//function App() {  -> replaced with below arrow function syntax which provides same results
const App = () => {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }

    // invoke event log and display search term as being entered by the user...
    //console.log(word);

  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
