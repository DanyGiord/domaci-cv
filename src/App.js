import profile from './profile.png';
import './App.css';
import Main from './components/Main';
import Obrazovanje from './components/Obrazovanje';
import Projekti from './components/Projekti';
import Vestine from './components/Vestine';
import Hobi from './components/Hobi';
import { data } from './data';
import { useState } from 'react';



function App() {
  const [dat] = useState(data)
  return (
    <div className="App">
      <div className="container">
        <div id='info' className='main-info'><Main /></div><hr />
        <div id='education' className='section'> <Obrazovanje /></div><hr />
        <div id='education' className='section'> <Projekti /></div><hr />
        <div className='offset-3 col-6 section'><Vestine /></div><hr />
        {/* <div className='offset-3 col-6 section'><Hobi /></div> */}
      </div>
    </div>
  );
}

export default App;
