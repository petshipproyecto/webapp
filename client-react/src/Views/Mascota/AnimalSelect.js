import React, {Component} from 'react';

class AnimalSelect extends Component{
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
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data) =>
            <option 
                key={data.Id_animal}
                value={data.Id_animal}
            >
                {data.Descripcion}
            </option>
        );
        
        return (
            <select
                name="tipoAnimal"
                className={
                    "form-control"
                }
                value={this.props.value}
                onChange={this.handleChange}>
                {options}
            </select>
        )
    }
}

export default AnimalSelect;