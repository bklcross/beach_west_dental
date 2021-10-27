import {Email} from '../utils/smtp';
import React, {useState} from 'react';

export default function Form () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [date, setDate] = useState("");
    //const [time, setTime] = useState("");

    const months = {
        'Jan' : '01',
        'Feb' : '02',
        'Mar' : '03',
        'Apr' : '04',
        'May' : '05',
        'Jun' : '06',
        'Jul' : '07',
        'Aug' : '08',
        'Sep' : '09',
        'Oct' : '10',
        'Nov' : '11',
        'Dec' : '12'
    }

    // returns current date in a YYYY-MM-DD format
    const calcCurrentDate = () => {
        const currentDateTemp = new Date().toDateString();

        return currentDateTemp.slice(11, 15) + '-'
                + months[currentDateTemp.slice(4, 7)] + '-'
                + currentDateTemp.slice(8, 10);
    }

    // returns 2 months ahead of current date in a YYYY-MM-DD format
    const calcDateLimit = () => {
        const currentDateTemp = new Date().toDateString();
        const currMonth = parseInt(currentDate.slice(5,7));
        const currYear = currentDateTemp.slice(11, 15);

        if(currMonth < 11) {
            const monthLimit = currMonth + 2

            return currYear + '-'
                + monthLimit + '-'
                + currentDateTemp.slice(8, 10);
        } else {
            return (parseInt(currYear) + 1) + '-'
                + '0' + (currMonth % 10) + '-'
                + currentDateTemp.slice(8, 10);
        }
    }

    const currentDate = calcCurrentDate();
    const dateLimit = calcDateLimit();

    const sendEmail = () => {
        Email.send({
        Host: "smtp.mailtrap.io",
        Username : "1392670e3c9778",
        Password : "0782c03f075f82",
        To : 'testmail@gmail.com',
        From : email,
        Subject : "Appointment Form Submission",
        Body : firstName + " " + lastName + " would like to make an appointment for " + date + ". Contact at: " + number,
        }).then(
            message => alert("mail sent successfully")
        );
    }

    const handleEmail = (newEmail) => {
        setEmail(newEmail);
    }

    const handleFirstName = (newFirstName) => {
        setFirstName(newFirstName);
    }

    const handleLastName = (newLastName) => {
        setLastName(newLastName);
    }

    const handleNumber = (newNumber) => {
        setNumber(newNumber);
    }

    const handleDate = (newDate) => {
        setDate(newDate);
    }

    return (
        <div>
            <form method="post">
                <label htmlFor="firstName">
                    First Name
                </label>
                <input onChange={e => handleFirstName(e.target.value)}
                    id="firstName"
                    name="firstName"
                /> <br />

                <label htmlFor="lastName">
                    Last Name
                </label>
                <input onChange={e => handleLastName(e.target.value)}
                    id="lastName"
                    name="lastName"
                /> <br />

                <label htmlFor="email">
                    Email Address
                </label>
                <input onChange={e => handleEmail(e.target.value)}
                    id="email"
                    type="email" 
                    name="email"
                /> <br />
                
                <label htmlFor="number">
                    Phone Number
                </label>
                <input onChange={e => handleNumber(e.target.value)}
                    id="number"
                    name="number"
                /> <br />

                <label htmlFor="date">
                    Desired Appointment Date
                </label>
                <input onChange={e => handleDate(e.target.value)} 
                type="date" id="date" name="date"
                min={currentDate} max={dateLimit}
                /> <br />

                <input type="button" value="Send Email" onClick={(e) => sendEmail()}/>
            </form>
        </div>
    )
}