import React, { Component } from "react";
import { Field } from "formik";

var emptyOption = (

  <option key={0} value={0}>
    Seleccione una Provincia
  </option>
);

class ProvinciaSelect extends Component {
  //On the change event for the select box pass the selected value back to the parent
  handleChange = event => {
    console.log(this.props)
    let selectedValue = event.target.value;
    this.props.onSelectChange(selectedValue);
  };

  render() {
    let arrayOfData = this.props.arrayOfData;
    let options = arrayOfData
      ? // Si tiene razas, las lista
        this.props.arrayOfData.map(Provincia => (
          <option key={Provincia.Id_provincia} value={Provincia.Id_provincia}>
            {Provincia.Nombre}
          </option>
        ))
      : // Sino, muestra sólo la opción vacía
        null;
    let valor = 'hola';
    //this.props.value
    return (
      <Field
        placeholder="Favorite Color"
        component="select"
        name="Provincia"
        className={"form-control" + this.props.className}
        disabled={arrayOfData ? false : true}        
        onChange={this.handleChange}
        required 
      >
       
        {options}
      </Field>
    );
  }
}

export default ProvinciaSelect;
