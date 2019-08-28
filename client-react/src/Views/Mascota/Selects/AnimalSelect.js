import React, {Component} from 'react';
import {Field} from "formik";

var emptyOption = <option key={0} value={0}>Seleccione un Tipo de Animal</option>

class AnimalSelect extends Component{

    //On the change event for the select box pass the selected value back to the parent
    handleChange = (event) =>
    {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render(){
        let arrayOfData = this.props.arrayOfData ? this.props.arrayOfData : null;
        let options = arrayOfData.map((data) =>
            <option 
                key={data.Id_animal}
                value={data.Id_animal}
            >
                {data.Descripcion}
            </option>
        );
        
        return (
            <Field
                component="select"
                name="Animal"
                className={"form-control"+this.props.className}
                value={this.props.value}
                disabled={arrayOfData?false:true}
                onChange={this.handleChange}>
                {emptyOption}
                {options}
            </Field>
        )
    }
}

export default AnimalSelect;