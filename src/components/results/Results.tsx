import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { QuasigroupController } from '../../controllers/QuasigroupController';
import type { Quasigroup } from '../../controllers/QuasigroupController';
import QuasigroupOutput from './QuasigroupOutput';
import '../../css/results/Results.css';
import PermutOutput from './PermutOutput';
import Header from './Header';

const Results = (props: {}) => {
    const state = useLocation().state;
    const quasigroup = state.elements;
    const permut = state.permut;
    const size = state.size;
    const translation = state.translation;

    const quasigroupController = new QuasigroupController(quasigroup, permut);

    const permutedQuasigroup = permut !== undefined ? QuasigroupController.performTranslation(quasigroup, permut) : undefined;
    
    const [isIsomorphic, isomorphicLoop, isomorphicPermut] = quasigroupController.checkIsomorphism(quasigroup, size);

    useEffect(() => {
        
    })

    return (
        <div>
            <Header quasigroup={quasigroup} permut={permut} />
            <div id='results'>
                <div id='user-input-section'>
                    <p className='results-paragraph'>You entered:</p>
                    <QuasigroupOutput quasigroup={quasigroup} />
                    
                </div>

                {(!translation && isIsomorphic) ? <div id='output-section'>
                    <p className='results-paragraph'>The quasigroup you entered is isomorphic to the loop</p>
                    <QuasigroupOutput quasigroup={isomorphicLoop} />
                    {(isomorphicPermut) && <div>
                        <p className='results-paragraph'>using the permutation</p>
                        <PermutOutput permut={isomorphicPermut} />
                    </div>}
                </div> : (translation) ? <div id='output-section'>
                {permut && <div>
                    <p className='results-paragraph'>The permutation</p>
                    <PermutOutput permut={permut} />    
                </div>}

                {permutedQuasigroup !== undefined && <div id="permuted-quasigroup-output">
                    <p className='results-paragraph'>results in the quasigroup</p>
                    <QuasigroupOutput quasigroup={permutedQuasigroup} />
                </div>}
                </div> : <div id='not-isomorphic-message'>
                    <p className='results-paragraph'>The entered quasigroup is not isomorphic to any loop of order {size}.</p>
                </div>}
            </div>
        </div>
    )
}

export default Results;