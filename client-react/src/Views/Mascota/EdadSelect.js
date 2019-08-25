import React, {Component} from 'react';
import {Field} from "formik";

var edades = [
    {value: "0", label: "Seleccione una edad"},
    {value: "1", label: "1 año"},
    {value: "2", label: "2 años"},
    {value: "3", label: "3 años"},
    {value: "4", label: "4 años"},
    {value: "5", label: "5 años"},
    {value: "6", label: "6 años"},
    {value: "7", label: "7 años"},
    {value: "8", label: "8 años"},
    {value: "9", label: "9 años"},
    {value: "10", label: "10 años"},
    {value: "11", label: "11 años"},
    {value: "12", label: "12 años"},
    {value: "13", label: "13 años"},
    {value: "14", label: "14 años"}
]

class EdadSelect extends Component{

    constructor(props){
        super(props)
    }

    //On the change event for the select box pass the selected value back to the parent
    handleChange = (event) =>
    {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render(){
        let options = edades.map((data) =>
            <option 
                key={data.value}
                value={data.value}
            >
                {data.label}
            </option>
        );
        
        return (
            <Field
                component="select"
                name="edad"
                className={"form-control"+ this.props.className}
                value={this.props.value}
                onChange={this.handleChange}>
                {options}
            </Field>
        )
    }
}

export default EdadSelect;