// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
        <div className="top">
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                       <Link className="link" to="/" >HOME</Link>
                    </li>
                    {/* <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li> */}
                    <li className="topListItem">
                        <Link className="link" to="/write" >WRITE</Link>
                    </li>
                </ul>
            </div>
        </div>
  );
}