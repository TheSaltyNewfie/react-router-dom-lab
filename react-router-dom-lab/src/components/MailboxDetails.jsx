import { useParams } from "react-router-dom"


const MailboxDetails = (props) => {
    const {mailboxId} = useParams()


    return (
        <main>
        <h1>Mailbox {mailboxId}</h1>
        <h2>Details</h2>
        <p>Boxholder: {props.mailboxes[mailboxId].name}</p>
        <p>Box Size: {props.mailboxes[mailboxId].size}</p>
        </main>
    )
}

export default MailboxDetails