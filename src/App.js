import {useState} from 'react';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  return (
    <div>
      <div className="container">
       Hello, World
      </div>
    </div>
    
  )
}

function EntryForm() {
  const [firstName, setFirstName]    = useState("");
  const [lastName, setLastname]      = useState("");
  const [phoneNumer, setPhoneNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>

    </form>
  );
}

export default App;
