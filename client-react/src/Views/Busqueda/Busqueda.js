import React from "react";
import { Row, Col, Card, Form} from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Aux from "../../hoc/_Aux";

import Tooltip from "rc-tooltip";

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

const style = { left: 0, width: 500 };
function log(value) {
  console.log(value); //eslint-disable-line
}

class FormNewPet extends React.Component {
  render() {
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
                      <h6>Buscar</h6>
                      <hr></hr>
                      <fieldset>
                        <div class="form-group">
                          <div class="radio d-inline radio-primary">
                            <input
                              name="primary-radio-1"
                              type="radio"
                              id="primary-radio-1"
                              class="form-control"
                              checked="true"
                            />
                            <label for="primary-radio-1" class="cr form-label">
                              Amigos
                            </label>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="radio d-inline radio-primary">
                            <input
                              name="primary-radio-1"
                              type="radio"
                              id="primary-radio-2"
                              class="form-control"
                            />
                            <label for="primary-radio-2" class="cr form-label">
                              Pareja
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <h6>Mostrar genero</h6>
                      <hr></hr>
                      <fieldset>
                        <div class="form-group">
                          <div class="radio d-inline radio-primary">
                            <input
                              name="primary-radio-3"
                              type="radio"
                              id="primary-radio-3"
                              class="form-control"
                              checked="true"
                            />
                            <label for="primary-radio-3" class="cr form-label">
                              Masculino
                            </label>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="radio d-inline radio-primary">
                            <input
                              name="primary-radio-3"
                              type="radio"
                              id="primary-radio-4"
                              class="form-control"
                            />
                            <label for="primary-radio-4" class="cr form-label">
                              Femenino
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <h6>Raza</h6>
                      <hr></hr>

                      <select name="edad" className="form-control">
                        <option value="Pincher" label="Pincher" />
                        <option value="Bulldog" label="Bulldog" />
                      </select>

                      <br />
                      <h6>Máxima distancia en Km.</h6>
                      <hr></hr>
                      <br />
                      <div style={style}>
                        <Slider
                          min={0}
                          max={1000}
                          defaultValue={3}
                          handle={handle}
                        />
                      </div>

                      <br />
                      <h6>Rango de edad</h6>
                      <hr></hr>
                      <br />
                      <div style={style}>
                        <Range
                          allowCross={false}
                          defaultValue={[1, 20]}
                          onChange={log}
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
