import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>slip3000</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                    <NavLink to="products">Products</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            
            <footer>
                <h2>This is a footer</h2>
            </footer>
        </div>
    )
}