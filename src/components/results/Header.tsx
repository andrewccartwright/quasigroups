import { Link } from "react-router-dom";
import type { Quasigroup, Permutation } from "../../controllers/QuasigroupController";
import '../../css/results/ResultsHeader.css';

const Header = (props: {quasigroup: Quasigroup, permut: Permutation}) => {
    return (
        <div id='results-header'>
            <Link to='/' state={{quasigroup: props.quasigroup, permut: props.permut}}>Home</Link>

        </div>
    )
}

export default Header;