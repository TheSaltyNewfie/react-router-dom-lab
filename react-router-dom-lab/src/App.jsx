import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MailboxList from './components/MailboxList'
import MailboxForm from './components/MailboxForm'
import MailboxDetails from './components/MailboxDetails'
import NavBar from './components/NavBar'

const App = () => {
  const [mailboxes, setMailboxes] = React.useState([])

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<main><h1>Post Office</h1></main>} />
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={<MailboxForm mailboxes={mailboxes} setMailboxes={setMailboxes} />} />
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
