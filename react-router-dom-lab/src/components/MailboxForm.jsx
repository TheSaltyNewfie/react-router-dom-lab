import { useNavigate } from "react-router-dom"

const MailboxForm = (props) => {

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const name = formData.get('name')
        const size = formData.get('size')
        console.log(name)
        console.log(size)
        props.setMailboxes((mailboxes) => [...mailboxes, {name, size}])
        navigate(`/mailboxes/${props.mailboxes.length}`)
    }

    return (
        <main>
        <h2>New Mailbox</h2>
        <form onSubmit={handleSubmit}>
            <label>Enter a boxholder:
                <input type="text" id="name" name="name" />
            </label>

            <label>
                Select a Box Size:
                <select id="size" name="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </label>
            
            <button type="submit">Create Mailbox</button>
        </form>
        </main>
    )
}

export default MailboxForm