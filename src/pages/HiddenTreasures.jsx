import krypoimage from "../assets/upworkimageedit.png"
import "./HiddenTreasures.css"
export default function HiddenTreasures(){
    return(<div>
        <h1 className="hdtitle">HIDDEN TREASURES</h1>
        <h3>Out of 100 collectibles , several will contain hidden treasures such as</h3>
        <ul className="prizeslist">
            <li>Cash Prizes</li>
            <li>Gadgets(Smartphones ,tablets,etc)</li>
            <li>An all inclusive  5-day trip for 2-3 friends to a myseray island resort</li>
            <li>Additional gifts and surprises</li>
        </ul>
<div className="whysolanadiv">
        <h1 className="whysolana">WHY SOLANA?</h1>
        <h2 className="solanadetails">Solana is chosen for it's high performance ,low transaction costs and fast proocessing speeds making it ideal for a smooth and seamless experience. </h2>
    <span className="image"><img src={krypoimage} alt="" /></span>
    </div>
    </div>);
}