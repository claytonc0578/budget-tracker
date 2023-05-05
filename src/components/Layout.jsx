import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/fontawesome-free-regular";

export default function Layout() {
    return (
        <>
            <nav className="layout">
                <Link to={"/"} className="layout-title">
                    Budget Tracker
                </Link>

                <ul className="layout-list">
                    <li className="layout-list-item">
                        <Link to="/" className="layout-link">
                            Dashboard
                        </Link>
                    </li>
                    <li className="layout-list-item">
                        <Link to="/transactions" className="layout-link">
                            Transactions
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />

            <footer className="center">
                <FontAwesomeIcon icon={faCopyright} 
                    className="copyright-icon"
                />
                <p className="footer-text">Budget Tracker. All rights reserved</p>
            </footer>
        </>
    )
}
