import React from "react";
import MDIcon from "./MDIcon";

function SelectMultiple(props) {
    // Assume we have props.values and props.setValues()

    // Default value for select bars to start at
    const defaultSelect = 'real';

    function createUI() {
        if (!props.values)
            return;
        return props.values.map((val, i) =>
            <div key={i}>
                <select value={val || defaultSelect} onChange={(e) => { handleSelectChange(e, i) }} >
                    <option value="real">Real Number</option>
                    <option value="date">Date</option>
                    <option value="integer">Integer</option>
                    <option value="string">String</option>
                    <option value="boolean">Boolean</option>
                    <option value="geojson">GeoJson String / WKT String</option>
                    <option value="timestamp">Timestamp</option>
                </select>
                <button type='button' value='remove' className="btn btn-outline-danger" onClick={(e) => { removeSelectBar(i) }}>
                    <MDIcon icon="delete"></MDIcon>
                </button>
            </div>
        )
    }

    function handleSelectChange(event, i) {
        //alert("handle change!");
        let val = event.target.value;
        let temp = props.values;
        temp[i] = val;
        props.setValues([...temp]);
    }

    function removeSelectBar(i) {
        //alert("remove select!");
        let selectValues = props.values;
        selectValues.splice(i, 1);
        props.setValues([...selectValues]);
    }

    function addSelectBar() {
        //alert("add select!");
        let temp = props.values;
        if (!temp) {
            props.setValues([defaultSelect]);
            console.log("select vals are" + props.values);
            return;
        }
        temp.push(defaultSelect);
        props.setValues([...temp]);
    }

    return (
        <div className="select-data-types">
            <label>Specify Data Types
                <div>
                    {createUI()}
                </div>
            </label>
            <button type="button" className="btn btn-outline-info" onClick={addSelectBar}>
                <MDIcon icon="add_circle"></MDIcon>
            </button>
        </div>
    )
}

export default SelectMultiple