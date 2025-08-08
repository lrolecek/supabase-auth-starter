import './App.css'

import {NavLink, Outlet} from 'react-router'

import UserStatus from './components/UserStatus'
function App() {
  return (
    <>
      <h1>Supabase + Auth + Router</h1>

      <header className="header">
        <nav className="menu">
          <NavLink to="/">Domů</NavLink>
          <NavLink to="/about">O nás</NavLink>
          <NavLink to="/secret">Tajemství</NavLink>
          <NavLink to="/login">Přihlášení</NavLink>
          <NavLink to="/register">Registrace</NavLink>
        </nav>

        <UserStatus />
      </header>

      <main className="main">

        <Outlet />

      </main>

    </>
  )
}

export default App
