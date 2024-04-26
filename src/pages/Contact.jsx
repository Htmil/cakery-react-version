import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
            <header>
                <div className="coverImagePages imageContact">
                    <h1>Contact</h1>
                </div>
            </header>
            <main>
                <div className="pageInfoWrapper">
                    <p>
                        Home delivery service: All the city of Stockholm (redacted) and Malmo
                        (redacted) with additional cost. <br /><br />
                        Place to pick up order: Via la Costa Avenue. Blue Port gated
                        neighbourhood. We will send you the GPS Location via WhatsApp.<br /><br />
                        Orders must be placed 2 days before for greater security, processing
                        and availability.<br /><br />
                        Tuesday to Saturday<br />
                        9 a.m. at 2 p.m.
                    </p>
                </div>
                <div className="formContainer">
                    <form action="#">
                        <h2>Contact Form</h2>
                        <label for="fName">
                            <span>Your name: </span>
                            <input type="text" id="fName" placeholder="Your name..." />
                        </label>
                        <label for="lName">
                            <span>Your last name: </span>
                            <input type="text" id="lName" placeholder="Your last name..." />
                        </label>
                        <label for="email">
                            <span>Your email: </span>
                            <input type="email" id="email" placeholder="Your email..." />
                        </label>
                        <label for="subject">
                            <span>Your Message:</span>
                            <textarea
                                id="subject"
                                name="subject"
                                placeholder="Write something.."></textarea>
                        </label>
                        <input type="button" id="submit" value="Submit" />
                    </form>
                </div>
            </main>
        </>
    )
}