import { useState } from 'react';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NotesPage from '../NotesPage/NotesPage';
import { logOut } from "../../utilities/users-service"

import { Link } from "react-router-dom"
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(getUser());

  function handleLogOut() {
    logOut();
    setUser(null);
}
  

  return (
    <main className='container'>
      { user ? 
      <>
      <Link onClick={handleLogOut}>Log Out</Link>
      <NotesPage user={user} />
      </>
      : 
      <AuthPage setUser={setUser} />
      }
    </main>
  );
}


