import React, {useState} from 'react';
import './contact.styles.css';
import axios from 'axios';

const Contact = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");
    const [result, setResult] = useState("");


    function handleSubmit(event){
        event.preventDefault();

        const data ={
            name,
            email,
            query
        };

        axios
            .post('/form', data)
            .then((res) => {
                
                setResult("success")
            })
            .catch(err => {
                console.error(err)
                setResult("fail")
            })
    }

    if(result === "success"){
        return(<div id="Contact">
            <h1>Get in touch!</h1>
            <p>Message successfully sent! We will be in touch shortly.</p>
        </div>)
    }

    if(result ==="fail"){
        return(<div id="Contact">
            <h1>Get in touch!</h1>
            <p>Error with message. Please check your credentials and try again.</p>
            <p>You can either send me an email to: <a href="mailto:carinalrobinson@gmail.com">carinalrobinson@gmail.com</a> or write your query below:</p>
        <form onSubmit={handleSubmit}>
            <input placeholder="name" type="text" name="name" value={name} onChange={(e) =>setName(e.target.value)}></input>
            <input placeholder="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)}></input>
            <textarea placeholder="message" name="query" value={query} onChange={(e) =>setQuery(e.target.value)}></textarea>
            <button type="submit">Send</button>
        </form>
        </div>)
    }

    return(<div id="Contact">
        <h1>Get in touch!</h1>
        <p>You can either send me an email to: <a href="mailto:carinalrobinson@gmail.com">carinalrobinson@gmail.com</a> or write your query below:</p>
        <form onSubmit={handleSubmit}>
            <input placeholder="name" type="text" name="name" value={name} onChange={(e) =>setName(e.target.value)}></input>
            <input placeholder="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)}></input>
            <textarea placeholder="message" name="query" value={query} onChange={(e) =>setQuery(e.target.value)}></textarea>
            <button type="submit">Send</button>
        </form>

    </div>)
}

export default Contact;