import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getInputs } from '../../controllers/GetInputs';
import { inputCheck } from '../../controllers/InputCheck';
import '../../css/home/QuasigroupInput.css';
import Input from './Input';

const QuasigroupInput = (props: {size: number, setSize: Function, translation: boolean, setTranslation: Function, setPermut: Function, setElements: Function}) => {
    const { translation, setPermut, setElements} = props;

    const [size, setSize] = useState<number>(props.size);
    const navigate = useNavigate();

    let isValidInput = true;
    const maxSize = 5;
    // let isValidQuasigroup = true;

    useEffect(() => {
        props.setTranslation(false);
    }, []);

    useEffect(() => {
        props.setSize(size);

    }, [size]);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        let inputs = Array.from(document.getElementsByClassName('table-input') as HTMLCollectionOf<HTMLInputElement>);
        isValidInput = inputCheck(inputs);

        let results = getInputs(translation, size);

        console.log(results);

        setElements(results[0]);
        setPermut(results[1]);

        if(isValidInput) {
            navigate('/results', {state: {translation: translation, size: size, elements: results[0], permut: translation ? results[1] : undefined}});
        }
        else {
            translation ? window.alert('Please enter a valid Cayley table and permutation using the elements 0, 1, 2, 3, and 4.') : window.alert('Please enter a valid Cayley table using the elements 0, 1, 2, 3, and 4.')
        }
    }

    const handleOrderInput = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLTextAreaElement;

        let input = target.value;
        const regex = /[1-9]/;

        if (input.match(regex) && Number(input) <= maxSize && Number(input) > 0) {
            setSize(Number(target.value));
            document.getElementById('order-error-message')!.style.display = 'none';
        }
        else if (Number(input) > maxSize || Number(input) < 1 && input != '') {
            document.getElementById('order-error-message')!.style.display = 'block';
        }
    }

    return (
        <form className='quasigroup' onSubmit={handleSubmit}>
            <div id='order-input-section'>
                <label id='order-input-label' htmlFor='order-input'>Order: <input id="order-input" type='text' min={0} defaultValue={size} onChange={handleOrderInput} /></label>
                <p id='order-error-message' className='error-message' >Please enter a positive integer value less than or equal to {maxSize}.</p>
            </div>
            <label htmlFor='quasigroup-table'>Enter the Cayley table:</label>
            <table id='quasigroup-table'>
                <thead>
                    <tr>
                        <th></th>
                        {
                            Array(size).fill(1).map((item, index) => {
                                return (
                                    <th key={index}>{index}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                {
                    Array(size).fill(1).map((item, rowIndex) => {
                        return <tr id={`${rowIndex}`} key={rowIndex}>
                            <th className="row-headers">{rowIndex}</th>
                            {Array(size).fill(1).map((item, colIndex) => {
                                let defaultValue = (colIndex + rowIndex) % size;
                                return <td key={colIndex}>
                                    <Input id={`row${rowIndex}col${colIndex}`} defaultValue={defaultValue} className="table-input" />
                                </td>
                            })}
                        </tr>
                    })
                }
                </tbody>
            </table>

            {translation && 
            <div id="translation-section">
                <p>Enter the permutation you want to use:</p>
                <table>
                    <thead>
                        <tr>
                        {
                            Array(size).fill(1).map((item, index) => {
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
                                Array(size).fill(1).map((item, index) => {
                                    return <td key={index}>
                                        <Input className="table-input translation-input" defaultValue={(index + 1) % size} />
                                    </td>
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
            
            }

            <input id="submit-btn" type="submit" value="Run" onClick={handleSubmit}/>
        </form>
    )
}

export default QuasigroupInput;