import { Permutation } from "../../controllers/QuasigroupController";
import '../../css/results/PermutOutput.css';

const PermutOutput = (props: {permut: Permutation}) => {
    const permut = props.permut;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                    {
                        permut.map((item, index) => {
                                return (
                                    <th key={index}>{index}</th>
                                )
                            })
                    }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {
                        permut.map((item, index) => {
                            return (
                                <td className='table-cell' key={index}>{item}</td>
                            )
                        })
                    }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PermutOutput;