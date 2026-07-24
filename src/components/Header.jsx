import { Link } from "react-router"

function Header({ text }) {
    return (
        <header>
            <h1>{text === "Employee" && <span><Link to="/">{"<"}</Link></span>}{text}</h1>
        </header>
    )
}

export default Header