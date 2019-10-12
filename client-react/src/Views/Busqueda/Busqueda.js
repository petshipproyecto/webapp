import React from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Aux from "../../hoc/_Aux";
import Tooltip from "rc-tooltip";
import Select from "react-select";


//------Para el select multiple---------------
const options = [
  { value: "Pincher", label: "Pincher" },
  { value: "Coquer", label: "Coquer" },
  { value: "Doberman", label: "Doberman" }
];
//------Para el select multiple---------------

//------Para el slide del rango---------------
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value + "km"}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  }
};
const style = { left: 0, width: "100%" };
function log(value) {
  console.log(value); //eslint-disable-line
}
//------Para el slide del rango---------------


class FormNewPet extends React.Component {
  //------Para el select multiple---------------
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  //------Para el select multiple---------------
  render() {
    //------Para el select multiple---------------
    const { selectedOption } = this.state;
    //------Para el select multiple---------------
    return (
      <Form>
        <Aux>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">Preferencias de Búsqueda</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <div class="d-flex justify-content-between">
                        <div>
                          <h6>Buscar:</h6>
                        </div>
                        <div style={{ color: "#f47386", fontWeight: "bolder" }}>
                          Amigos
                        </div>
                      </div>
                      <hr></hr>
                      <fieldset>
                        <div class="form-group">
                          <div class="radio d-inline radio-primary">
                            <input
                              name="tipoBusqueda"
                              type="radio"
                              id="Amigos"
                              class="form-control"
                              checked="true"
                            />
                            <label for="Amigos" class="cr form-label">
                              Amigos
                            </label>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="radio d-inline radio-primary">
                            <input
                              name="tipoBusqueda"
                              type="radio"
                              id="pareja"
                              class="form-control"
                            />
                            <label for="pareja" class="cr form-label">
                              Pareja
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <div class="d-flex justify-content-between">
                        <div>
                          <h6>Mostrar Genero:</h6>
                        </div>
                        <div style={{ color: "#f47386", fontWeight: "bolder" }}>
                          Masculino
                        </div>
                      </div>
                      <hr></hr>
                      <fieldset>
                        <div class="form-group">
                          <div class="radio d-inline radio-primary">
                            <input
                              name="genero"
                              type="radio"
                              id="masculino"
                              class="form-control"
                              checked="true"
                            />
                            <label for="masculino" class="cr form-label">
                              Masculino
                            </label>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="radio d-inline radio-primary">
                            <input
                              name="genero"
                              type="radio"
                              id="femenino"
                              class="form-control"
                            />
                            <label for="femenino" class="cr form-label">
                              Femenino
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <div class="d-flex justify-content-between">
                        <div>
                          <h6>Raza:</h6>
                        </div>
                        <div style={{ color: "#f47386", fontWeight: "bolder" }}>
                          Pincher
                        </div>
                      </div>
                      <hr style={{ color: "gray", height: 1 }} />
                      <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        isMulti={true}
                        placeholder="Selecionar razas"
                      />
                      <br />
                      <br />
                      <div class="d-flex justify-content-between">
                        <div>
                          <h6>Máxima distancia:</h6>
                        </div>
                        <div style={{ color: "#f47386", fontWeight: "bolder" }}>
                          100 km.
                        </div>
                      </div>
                      <hr></hr>
                      <br />
                      <div style={style}>
                        <Slider 
                          min={0}
                          max={1000}
                          defaultValue={3}
                          handle={handle} 
                          handleStyle={{
                            border:"2px solid #f47386",
                            backgroundColor: 'white',
                          }}
                          trackStyle={{
                            background: "#f47386"
                          }}           
                        />
                      </div>
                      <br />
                      <div class="d-flex justify-content-between">
                        <div>
                          <h6>Rango de edad:</h6>
                        </div>
                        <div style={{ color: "#f47386", fontWeight: "bolder" }}>
                          1 a 5 años
                        </div>
                      </div>
                      <hr></hr>
                      <br />
                      <div style={style}>
                        <Range
                          allowCross={false}
                          defaultValue={[1, 20]}
                          onChange={log}
                          handleStyle={{
                            border:"2px solid #f47386",
                            backgroundColor: 'white',
                          }}
                          trackStyle={{
                            background: "#f47386"
                          }} 
                        />
                      </div>
                      <br />
                      <br />
                      <center>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-primary shadow-2 mb-4"
                          >
                            Guardar Preferencias
                          </button>
                        </div>
                      </center>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Aux>
      </Form>
    );
  }
}

export default FormNewPet;
