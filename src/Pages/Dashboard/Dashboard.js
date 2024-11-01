import { Link } from "react-router-dom";
import "../../index.css";

const Dashboard = () => {
    return(
        <>
            <div className="disp-block">
                <h1>Dashboard</h1>
                <Link to="../Landing">
                    <button>To Landing</button>
                </Link>

                <input type="text" placeholder="Enter any text" id="any-text"></input>
                <button onClick={getInput}>HAHA</button>
            </div>
        </>
    );
}

function getInput() {
    const input = document.getElementById("any-text").value;
    text = input;
}

export var text;

export default Dashboard;