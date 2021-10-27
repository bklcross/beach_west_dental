import {Email} from '../utils/smtp';
//import React, {useState} from 'react';

export default function Form () {
    /*
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [number, setNumber] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    */

    const sendEmail = () => {
        console.log("hello");
        Email.send({
        Host: "smtp.mailtrap.io",
        Username : "1392670e3c9778",
        Password : "0782c03f075f82",
        To : 'dimitri.matevossian@gmail.com',
        From : "testsender@gmail.com",
        Subject : "test subject",
        Body : "test body",
        }).then(
            message => alert("mail sent successfully")
        );
    }

    /*
    const handleSubmit = (event) => {
        
    }
    */

    /*
    const getData = (value) => {
        setData(value.target.value);
    }
    */

    // states/hooks
    return (
        <body>
            <form method="post">
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                /> <br />
                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                /> <br />
                <input type="button" value="Send Email" onClick={(e) => sendEmail()}/>
            </form>
        </body>
    )
}