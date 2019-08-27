import React, {Component} from 'react';
import {Field} from "formik";

var Generos = [
    {value: "0", label: "Seleccione una Género"},
    {value: "1", label: "Macho"},
    {value: "2", label: "Hembra"}
]

class GeneroSelect extends Component{

    //On the change event for the select box pass the selected value back to the parent
    handleChange = (event) =>
    {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render(){
        let options = Generos.map((data) =>
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
                name="Genero"
                className={"form-control"+this.props.className}
                value={this.props.value}
                onChange={this.handleChange}>
                {options}
            </Field>
        )
    }
}

export default GeneroSelect;