import Picker from './Picker'
import { useState } from 'react'

function GridOfDots({ nRows, nCols }) {

    var dot = ({ color, key }) => <span className="dot" key={key} style={{ backgroundColor: color }}></span>

    var rowOfDots = ({ palette, nCols, rowKey }) => {
        var x = [];
        var dots = Array.from(Array(nCols)).map((_, colIndex) => {
            var dotKey = rowKey + "_" + colIndex;
            var randColorIdx = Math.floor(Math.random() * palette.length);
            var color = palette[randColorIdx];
            return dot({ color, key: dotKey });
        })
        return <div key={rowKey}>{dots}</div>
    };

    var grid = ({ palette, nRows, nCols }) => {
        const arr = Array.from(Array(nRows));
        var rows = arr.map((_, rowKey) => {
            return rowOfDots({ palette, nCols, rowKey })
        })
        return rows
    }

    const [color1, setColor1] = useState("#FFD10F"); // SPEND
    const [color2, setColor2] = useState("#FFF4C3"); // spend
    const [color3, setColor3] = useState("#05BE1E"); // BOTH
    const [color4, setColor4] = useState("#C1EFC7"); // both
    const [color5, setColor5] = useState("#1C3FFD"); // INVEST
    const [color6, setColor6] = useState("#C6CFFF"); // invest :-(

    const palette = [color1, color2, color3, color4, color5, color6]
    return (
        <div>
            <div>
                <span>{Picker({ color: color1, setColor: setColor1 })}</span>
                <span>{Picker({ color: color2, setColor: setColor2 })}</span>
                <span>{Picker({ color: color3, setColor: setColor3 })}</span>
                <span>{Picker({ color: color4, setColor: setColor4 })}</span>
                <span>{Picker({ color: color5, setColor: setColor5 })}</span>
                <span>{Picker({ color: color6, setColor: setColor6 })}</span>
            </div>
            <div style={{ clear: "both" }}></div>
            <div style={{ clear: "both", "margin": "50px"}}>
                {grid({ palette, nRows, nCols })}
            </div>
        </div>
    );
}

export default GridOfDots;