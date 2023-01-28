import {useState} from 'react';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const addEntryToPhoneBook = (entry) => {
    setEntries([...entries, entry].sort((a,b) => a.lastname.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1));
  }
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
