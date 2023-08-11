import React from 'react';
import CustomTree from "./CustomTree";
import './App.css';

const positions = {
    name: 'Estoquista',
    children: [
        {
            name: 'Repositor',
            children: [
                { name: 'Atendente Padaria',
                    children: [
                        { name: 'Açogueiro',
                            children: [
                                { name: 'Gerente'},
                                { name: 'Manager'},
                            ]}
                    ],
                },
                { name: 'Atendente Peixaria',
                    children: [
                        { name: 'Caixa',
                            children: [
                                { name: 'Supervisor'},
                            ]}
                    ],
                },
            ],
        },
    ],
};

const CareerPath = () => {

    return (
        <div className="container">
            <CustomTree data={positions}/>
        </div>
    );
};

export default CareerPath;