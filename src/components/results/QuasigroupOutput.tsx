import type {Quasigroup} from '../../controllers/QuasigroupController';

const QuasigroupOutput = (props: {quasigroup: Quasigroup}) => {
    const quasigroup = props.quasigroup;

    return (
        <div>
            <div id='user-input-section'>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {quasigroup.map((item, index) => {
                                return (
                                    <th key={index}>{index}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            quasigroup.map((row, rowIndex) => {
                                return (
                                    <tr key={rowIndex}>
                                        <th className='row-headers'>{rowIndex}</th>
                                        {
                                            row.map((item, index) => {
                                                return (
                                                    <td key={index} className='table-cell'>
                                                        {item}
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default QuasigroupOutput;