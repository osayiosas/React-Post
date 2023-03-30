import { Link } from "react-router-dom";

import { MdPostAdd, MdMessage } from "react-icons/md";

import "./Mainheader.css";

export const MainHeader = () => {
    return (
        <header className="header">
            <h1 className="logo">
                <MdMessage />
                TALK
            </h1>

            <p>
                <Link to="/create-post" className="button">
                    <MdPostAdd size={18} />
                    New Post
                </Link>
            </p>
        </header>
    );
}

export default MainHeader;
