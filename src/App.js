import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { contact } from './ContactJson';
import Home from './Home';
import AddContact from './AddContact';

function App() {

  const [json, setjson] = useState(contact)

  return (
     <Routes>
      <Route path='/' element={<Home  json={json} />} />
      <Route path='/add' element={<AddContact setjson={setjson} />} />
     </Routes>
  );
}

export default App;
