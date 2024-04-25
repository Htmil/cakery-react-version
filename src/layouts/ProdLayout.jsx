import { NavLink, Outlet } from "react-router-dom";

export default function ProdLayout(){
    return (
        <div className="prodLayout">

            <h2>Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, porro!</p>

            <nav>
                <NavLink to="CupCakes">Cupcakes</NavLink>
                <NavLink to="WedCakes">Wedding cakes</NavLink>
            </nav>
            
            <Outlet />

        </div>
    )
}