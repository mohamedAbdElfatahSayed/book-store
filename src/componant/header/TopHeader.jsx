import { Link } from "react-router-dom";

const TopHeader = ({toggle,setToggle}) => {
    return (
        <div className="header-top">
        <div onClick={()=>setToggle(prev=>!prev)} className="header-top-menu">
        {toggle?<i style={{color:"red",border:"1px solid red",borderRadius:"9px"}} className="bi bi-x-lg"></i>:<i className="bi bi-list"></i>}
        </div>
        <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i>
            01158487539
        </div>
        <div className="header-top-text">
            welcome to online book store
        </div>
        <div className="header-top-link">
            <Link className="header-bottom-link" to='/login'>
        <i className="bi bi-person-fill"></i>
        login
        </Link>
        </div>
    </div>

      );
}
 
export default TopHeader;