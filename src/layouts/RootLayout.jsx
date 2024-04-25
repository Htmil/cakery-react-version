import { Link, NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <nav className="mainNav">
                <Link to="/" className="logo"></Link>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="products">Products</NavLink>
            </nav>

            <Outlet />

            <footer>
                <div className="links">
                    <a href="https://www.facebook.com/munamiicupcakes/" target="_blank" >
                        <img src="../images/facebook.png" alt="facebook Logo" /><p>// munamiicupcakes</p>
                    </a>
                    <a href="https://www.instagram.com/munamii.cakery/" target="_blank" >
                        <img src="../images/insta.png" alt="instagram Logo" /><p>// munamii.cakery</p>
                    </a>
                    <a href="./contact">
                        <img src="../images/email.png" alt="Email Logo" /><p>// Send email</p>
                    </a>
                </div>
            </footer>
        </div>
    )
}