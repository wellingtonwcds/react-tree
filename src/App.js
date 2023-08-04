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

const App = () => {

    return (
        <div style={{height: '100vh', backgroundColor: "#004DA5", textAlign: "center"}}>
            <CustomTree data={positions}/>
        </div>
    );
};

export default App;