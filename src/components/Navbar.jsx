import Hamburger from "./Hamburger.jsx"
import logoupworkedited from "../assets/logoupworkedited.png"
import Cart from "./cart.jsx"
export default function Navbar(){
    return(
<header>
    <nav>
        <ul>
            <li><Hamburger/></li>
            <li><Cart/></li>
        </ul>
        <ul>
            <li><img src={logoupworkedited} alt="logo" /></li>
        </ul>
    </nav>
</header>
    );
}