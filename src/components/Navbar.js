import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <ul className="nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Zemin'>Zemin</Link></li>
                <li><Link to='/Jinping'>Jinping</Link></li>
                <li><Link to='/Jintao'>Jintao</Link></li>
            </ul>
        </>
    )
}
export default Navbar;