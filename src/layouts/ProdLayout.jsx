import { NavLink, Outlet } from "react-router-dom";
import React, { useEffect } from "react";

export default function ProdLayout() {

    useEffect(() => {
        // Simulate a click event on the "Cupcakes" NavLink when component mounts
        document.getElementById("cupCakeLink").click();
    }, []);

    return (
        <>
            <header>
                <div className="coverImagePages imageProd">
                    <h1>Products</h1>
                </div>
            </header>
            <main>
                <div className="prodLayout">
                    <h2>Indulge in Sweet Bliss: Cupcakes and Wedding Cakes Await!</h2>
                    <nav className="prodButtons">
                        <p>Choose a category :</p>
                        <NavLink id="cupCakeLink" to="CupCakes" className="ctaButton">Cupcakes</NavLink>
                        <NavLink to="WedCakes" className="ctaButton">Wedding cakes</NavLink>
                    </nav>

                    <Outlet />

                </div>
            </main>
        </>
    )
}