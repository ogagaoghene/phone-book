import {useState} from 'react';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const addEntryToPhoneBook = (entry) => {
    setEntries(
      [...entries, entry].sort((a,b) => 
      a.lastname.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1));
  }
  return (
    <div>
      <div className="container">
        <DisplayForm  addEntryToPhoneBook={addEntryToPhoneBook}/>
      </div>
    </div>
    
  )
}

function DisplayForm() {
  const [firstName, setFirstName]     = useState("");
  const [lastName, setLastName]       = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name='firstName'
        id='firstName'
        placeholder='Firstname'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input 
        type="text"
        name='lastName'
        id='lastName'
        placeholder='Lastname'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input 
        type="text"
        name='phoneNumber'
        id='phoneNumber'
        placeholder='Phone Number'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </form>
  );
}

export default App;
