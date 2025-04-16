import { Link } from "react-router-dom";

const BottomHeader = ({toggle,setToggle}) => {
    return (
        <div style={{left:toggle && "0"}} className="header-bottom">
            <ul className="header-bottom-links">
                <Link to="/" onClick={()=>setToggle(false)} className="header-bottom-link">home</Link>
                <Link to="/author" onClick={()=>setToggle(false)} className="header-bottom-link">author</Link>
                <Link to="/about" onClick={()=>setToggle(false)} className="header-bottom-link">about us</Link>
                <Link to={`/contact`} onClick={()=>setToggle(false)} className="header-bottom-link">contact us</Link>
                <Link to="/register" onClick={()=>setToggle(false)} className="header-bottom-link">register</Link>
            </ul>
        </div>
      );
}
 
export default BottomHeader;