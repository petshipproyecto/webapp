import React, { Component } from "react";
import { Field } from "formik";

var emptyOption = (
  <option key={0} value={0}>
    Seleccione una Raza
  </option>
);

class LocalidadSelect extends Component {
  //On the change event for the select box pass the selected value back to the parent
  handleChange = event => {
    let selectedValue = event.target.value;
    this.props.onSelectChange(selectedValue);
  };

  render() {
    let arrayOfData = this.props.arrayOfData;
    let options = arrayOfData
      ? // Si tiene razas, las lista
        this.props.arrayOfData.map(data => (
          <option key={data.Id_localidad} value={data.Id_localidad}>
            {data.Nombre}
          </option>
        ))
      : // Sino, muestra sólo la opción vacía
        null;

    return (
      <Field
        component="select"
        name="Raza"
        className={"form-control" + this.props.className}
        disabled={arrayOfData ? false : true}
        onChange={this.handleChange}
      >
       
        {options}
      </Field>
    );
  }
}

export default LocalidadSelect;
