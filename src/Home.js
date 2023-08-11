import React from "react";
import './Home.css';
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    function handleOnChange(){
        navigate('carrerPath');
    }

    return (
        <div className="container">
            <img className="icon_lidl_login" src={require("./lidl.png")} alt={"Login icon lidl"}/>
            <span className="text_login">Discover the possibilities ahead by selecting your current position</span>
            <select className="combo_login" name="cars" id="cars" onChange={handleOnChange}>
                <option value="">Select Here</option>
                <option value="Estoquista">Estoquista</option>
                <option value="Repositor">Repositor</option>
                <option value="Atendente Padaria">Atendente Padaria</option>
                <option value="Atendente Peixaria">Atendente Peixaria</option>
            </select>
        </div>
    );
};

export default Home;