import React from 'react';
import Tree from "react-d3-tree";
import lidl from "./lidl.png";
import './CustomTree.css';


const CustomTree = ({data}) => {

    const renderCustomNode = ({ nodeDatum, toggleNode }) => (
        <g>

            <text onClick={toggleNode} textAnchor="middle" y="-30"
                  fontSize={"15"}
                  fill={"white"}
                  strokeWidth={"0px"}
                  fontWeight={"bold"}>
                {nodeDatum.name}
            </text>

            <image onClick={toggleNode}
                   xlinkHref={lidl}
                   x="-30"
                   y="-20"
                   height="65"
                   width="65"
            />
        </g>
    );

    const getScreenCenter = () => {
        return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };
    };

    const centerPosition = getScreenCenter();

    return (
        <Tree
            data={data}
            collapsible={true}
            draggable={false}
            enableLegacyTransitions={true}
            transitionDuration={500}
            orientation="vertical"
            translate={{x: centerPosition.x, y:200}}
            renderCustomNodeElement={renderCustomNode}
            separation={{ siblings: 1.5, nonSiblings: 2.5}}
        />
    );
};

export default CustomTree;