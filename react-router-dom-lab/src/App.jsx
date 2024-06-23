import { Route, Routes } from 'react-router-dom'
import MailboxList from './components/MailboxList'
import MailboxForm from './components/MailboxForm'
import MailboxDetails from './components/MailboxDetails'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList/>} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
    </div>
    )
}

export default App