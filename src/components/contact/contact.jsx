import React from 'react';
import './contact.scss'

export default function contact(props) {
    return (
        <div>
            <form className="contact">
                <label for="name" className="contact__label">NAME</label>
                <input type="form" label ="name" className="contact__form" /><br />
                <label for="name" className="contact__label">EMAIL</label>
                <input type="form" label ="email" className="contact__form" /><br />
                <label for="name" className="contact__label">PHONE</label>
                <input type="form" label ="phone" className="contact__form" /><br />
                <label for="name" className="contact__label">MESSAGE</label>
                <input type="form" label ="message" className="contact__form-message" /><br />
            </form>
        </div>
    )
}
