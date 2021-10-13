import {Email} from '../utils/smtp';

export default function Form () {
    const sendEmail = () => {
        Email.send({
        Host: "smtp.gmail.com",
        Username : "<sender’s email address>",
        Password : "<email password>",
        To : '<recipient’s email address>',
        From : "<sender’s email address>",
        Subject : "<email subject>",
        Body : "<email body>",
        }).then(
            message => alert("mail sent successfully")
        );
    }

    // states/hooks
    return (
        <body>  
            <form method="post">
                <input type="button" value="Send Email" onClick={(e) =>sendEmail()}/>
            </form>
        </body>
    )
}