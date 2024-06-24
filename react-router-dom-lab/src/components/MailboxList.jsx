import {useState} from 'react'
import {Link} from 'react-router-dom'

const MailboxList = (props) => {

    return (
        <main>
        <h2>Mailboxes</h2>
        <ul>
            {props.mailboxes.map((mailbox, index) => (
                <li key={index}>
                    <Link to={`/mailboxes/${index}`}>Mailbox {index}</Link>
                </li>
            ))}
        </ul>
        </main>
    )
}

export default MailboxList