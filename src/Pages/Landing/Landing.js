import { Link } from "react-router-dom";
import { text } from "../Dashboard/Dashboard";

const Landing = () => {
    return(
        <>
            <h1>This is Landing Page</h1>
            <Link to="../Dashboard">
                <button>Go To Dashboard</button>
            </Link>
            <h1>{text}</h1>
        </>
    );
}

export default Landing;