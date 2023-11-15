import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import QuasigroupInput from "./QuasigroupInput";


const Home = (props: {translation: boolean, setTranslation: Function, setPermut: Function, setElements: Function}) => {
    const [size, setSize] = useState<number>(5);

    const state = useLocation().state;

    const setDefaultValues = () => {
        let quasigroupValues = state.quasigroup;
        
    }

    if (state) {
        setDefaultValues();
    }

    

    return (
        <div>
            <Header size={size} translation={props.translation} setTranslation={props.setTranslation} />
            <QuasigroupInput size={size} setSize={setSize} translation={props.translation} setTranslation={props.setTranslation} setPermut={props.setPermut} setElements={props.setElements} />
        </div>
    )
}

export default Home;