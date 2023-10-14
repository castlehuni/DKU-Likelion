import { Outlet, Link } from "react-router-dom";

const Menu = () => {
    return(
        <div className="menu-bar">
            <header style={{background: "olive"}}>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/project">
                        <li>project</li>
                    </Link>
                    <Link to="/login">
                        <li>Log in</li>
                    </Link>
                </ul>
            </header>
            <Outlet />
        </div>
    );
};
export default Menu;