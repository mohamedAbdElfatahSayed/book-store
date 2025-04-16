import { useState } from 'react';
import BottomHeader from './BottomHeader';
import './header.css'
import MidleHeader from './MidleHeader';
import TopHeader from './TopHeader';
const Header = () => {
    const [toggle,setToggle]=useState(false)
    console.log(toggle)
    return ( 
        <header className="header">
         <TopHeader toggle={toggle} setToggle={setToggle} />
         <MidleHeader/>
         <BottomHeader toggle={toggle} setToggle={setToggle} />
        </header>
     );
}
 
export default Header;