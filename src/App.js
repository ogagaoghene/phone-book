import {useState} from 'react';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const addEntryToPhoneBook = (entry) => {
    setEntries(
      [...entries, entry].sort((a,b) => 
      a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1));
  }
  return (
    <div>
      <div className="container">
        <DisplayForm  addEntryToPhoneBook={addEntryToPhoneBook}/>
        <DisplayEntries entries={entries}/>
      </div>
    </div>
    
  )
}

function DisplayForm({addEntryToPhoneBook}) {
  const [firstName, setFirstName]     = useState("");
  const [lastName, setLastName]       = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook({firstName, lastName, phoneNumber});
  };
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        name='firstName'
        id='firstName'
        placeholder='Firstname'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input 
        type='text'
        name='lastName'
        id='lastName'
        placeholder='Lastname'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input 
        type='text'
        name='phoneNumber'
        id='phoneNumber'
        placeholder='Phone Number'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type='Submit'>Submit</button>
    </form>
  );
}

function DisplayEntries({entries}) {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
       {entries.map((entry, index) => (
        <tr key={index}>
          <td>{entry.firstName}</td>
          <td>{entry.lastName}</td>
          <td>{entry.phoneNumber}</td>
        </tr>
       ))}
      </tbody>
    </table>
  )
}

export default App;
