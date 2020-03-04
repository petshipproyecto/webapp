import React from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { connect } from "react-redux";
import Aux from "../../hoc/_Aux";
import Tooltip from "rc-tooltip";
import Select from "react-select";
import axios from "axios";
import config from "../../config";
import swal from "sweetalert";
const opcionesPreferencias = [
  {
    value: 1,
    text: "Pareja"
  },
  {
    value: 2,
    text: "Amistad"
  }
];

const rutaApi = config.rutaApi;

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

//------Para el slide del rango---------------

// when component mount call razas o animal

const options = [];

class FormNewPet extends React.Component {
  //------Para el select multiple---------------
  state = {
    selectedOption: [],
    PreferenciaAmistad: null,
    PreferenciaPareja: null,
    opcionPreferencia: 1,
    razasAmistad: [],
    razasPareja: [],
    defaultDistanciaMax: 50,
    defaultEdad: [1, 14],
    interesMacho: true,
    interesHembra: true,
    Perfil_activo: 0
  };
  myEvento = () => {
    console.log("hola");
  };
  handleChangeSlider = value => {
    this.setState({ defaultDistanciaMax: parseInt(value) });
    console.log(typeof value); //eslint-disable-line
    console.log(JSON.stringify(this.state));
  };
  handleChangeRange = value => {
    this.setState({ defaultEdad: [parseInt(value[0]), parseInt(value[1])] });
    console.log(value);
    console.log(JSON.stringify(this.state));
  };
  handleSubmit = e => {
    e.preventDefault();

    const razas = this.state.selectedOption ?  this.state.selectedOption : [];
    console.log(razas)
    let auxRazas = [];
    for (let i = 0; i < razas.length; i++) {
      auxRazas.push(razas[i].value);
      console.log(razas[i].value);
    }

    if (!(this.state.interesMacho || this.state.interesHembra)) {
      swal({
        title: "Error!",
        text: "Ingrese preferencia de género",
        icon: "error",
        timer: 3000,
        button: false
      });
    } else {
      const idPreferencia =
        this.state.opcionPreferencia === 1
          ? this.state.PreferenciaPareja.Id_preferencia
          : this.state.PreferenciaAmistad.Id_preferencia;
      let payload = {
        Id_preferencia: idPreferencia,
        Interes_macho: this.state.interesMacho,
        Interes_hembra: this.state.interesHembra,
        Edad_min: this.state.defaultEdad[0],
        Edad_max: this.state.defaultEdad[1],
        Distancia_max: this.state.defaultDistanciaMax,
        Razas: auxRazas
      };

      console.log(this.state.opcionPreferencia);

      const urlPerfil = rutaApi + "perfil/" + this.state.Perfil_activo;
      const payloadPerfil = {
        Interes_pareja: this.state.opcionPreferencia == 1 ? true : false,
        Interes_amistad: this.state.opcionPreferencia != 1 ? true : false
      };
      axios
        .put(urlPerfil, payloadPerfil)
        .then(console.log("Se modificó la preferencia de busqueda"))
        .catch();

      axios
        .put(rutaApi + "preferencia/" + idPreferencia, payload)
        .then(function(response) {
          console.log(response);
          swal({
            title: "Éxito!",
            text: "Se registró correctamente la preferencia",
            icon: "success",
            timer: 3000,
            button: false
          });
        })
        .catch(function(error) {
          swal({
            title: "Error!",
            text: "Se registró correctamente su preferencia",
            icon: "error",
            timer: 3000,
            button: false
          });
          console.log(error);
        });
      console.log(payload);
    }
  };

  handleChangePreferencia = e => {
    console.log(this.state);
    console.log(this.state.PreferenciaPareja.Edad_min);

    let opcion = e.target.value;
    let edadMin =
      opcion === "1"
        ? this.state.PreferenciaPareja.Edad_min
        : this.state.PreferenciaAmistad.Edad_min;
    let edadMax =
      opcion === "1"
        ? this.state.PreferenciaPareja.Edad_max
        : this.state.PreferenciaAmistad.Edad_max;
    this.setState({
      opcionPreferencia: parseInt(opcion),
      selectedOption:
        opcion === "1" ? this.state.razasPareja : this.state.razasAmistad,
      defaultDistanciaMax:
        opcion === "1"
          ? this.state.PreferenciaPareja.Distancia_max
          : this.state.PreferenciaAmistad.Distancia_max,
      defaultEdad: [edadMin, edadMax],
      interesHembra:
        opcion === "1"
          ? this.state.PreferenciaPareja.Interes_hembra
          : this.state.PreferenciaAmistad.Interes_hembra,
      interesMacho:
        opcion === "1"
          ? this.state.PreferenciaPareja.Interes_macho
          : this.state.PreferenciaAmistad.Interes_macho
    });
    console.log(JSON.stringify(this.state) + "estado");
    console.log(opcion + "opcion");
  };
  componentDidMount() {
    axios
      .get(rutaApi + "usuario/" + this.props.userId)
      .then(r => {
        console.log(r.data);
        this.setState(
          {
            PreferenciaAmistad: r.data.Perfil_activo.Preferencia_amistad,
            PreferenciaPareja: r.data.Perfil_activo.Preferencia_pareja,
            Perfil_activo: r.data.Id_perfil_activo
          },
          function() {
            // map with select opctions
            let razas = this.state.PreferenciaAmistad.Razas;
            let aux = [];
            let aux2 = [];
            for (let i = 0; i < razas.length; i++) {
              aux.push({
                value: razas[i].Id_raza,
                label: razas[i].Descripcion
              });
            }

            console.log("Razas: " + JSON.stringify(razas));
            razas = this.state.PreferenciaPareja.Razas;
            for (let i = 0; i < razas.length; i++) {
              aux2.push({
                value: razas[i].Id_raza,
                label: razas[i].Descripcion
              });
            }

            console.log("component did mount" + JSON.stringify(aux2));
            this.setState({
              selectedOption: aux2,
              razasAmistad: aux,
              razasPareja: aux2,
              defaultDistanciaMax: this.state.PreferenciaPareja.Distancia_max,
              defaultEdad: [
                this.state.PreferenciaPareja.Edad_min,
                this.state.PreferenciaPareja.Edad_max
              ],
              interesMacho: this.state.PreferenciaPareja.Interes_macho,
              interesHembra: this.state.PreferenciaPareja.Interes_hembra
            });

            axios
              .get(rutaApi + "animal/" + r.data.Perfil_activo.Raza.Id_animal)
              .then(r => {
                console.log(r.data);

                for (let i = 0; i < r.data.Razas.length; i++) {
                  options.push({
                    value: r.data.Razas[i].Id_raza,
                    label: r.data.Razas[i].Descripcion
                  });
                }
              })
              .catch();
            console.log(this.state);
          }
        );
      })
      .catch();
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });

    if (parseInt(this.state.opcionPreferencia) === 1) {
      this.setState({ razasPareja: selectedOption });
      console.log("handleChange" + " if");
    } else {
      this.setState({ razasAmistad: selectedOption });
      console.log("handleChange" + " else");
    }
    console.log(this.state);
    console.log("Option selected:", selectedOption);
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
                      </div>
                      <hr></hr>
                      {opcionesPreferencias.map(choice => {
                        return (
                          <fieldset>
                            <div class="form-group">
                              <div class="radio d-inline radio-primary  ">
                                <input
                                  type="radio"
                                  name="tipoBusqueda"
                                  class="form-control"
                                  value={choice.value}
                                  id={choice.text}
                                  checked={
                                    this.state.opcionPreferencia == choice.value
                                  }
                                  onClick={this.handleChangePreferencia}
                                />
                                <label for={choice.text} class="cr form-label">
                                  {choice.text}
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        );
                      })}
                      <br></br>
                      <div class="d-flex justify-content-between">
                        <div>
                          <h6>Mostrar Genero:</h6>
                        </div>
                      </div>
                      <hr></hr>
                      <fieldset>
                        <div class="form-group">
                          <div className="checkbox checkbox-fill d-inline">
                            <input
                              id="macho"
                              name="interesMacho"
                              type="checkbox"
                              checked={this.state.interesMacho}
                              onChange={this.handleInputChange}
                              disabled={this.state.opcionPreferencia === 1}
                              style={{ opacity: 4.5 }}
                            />
                            <label
                              htmlFor="macho"
                              className="cr"
                              style={{ opacity: 4.5 }}
                            >
                              Masculino
                            </label>
                          </div>
                        </div>
                        <div class="form-group">
                          <div className="checkbox checkbox-fill d-inline">
                            <input
                              id="hembra"
                              name="interesHembra"
                              type="checkbox"
                              checked={this.state.interesHembra}
                              onChange={this.handleInputChange}
                              disabled={this.state.opcionPreferencia === 1}
                              style={{ opacity: 4.5 }}
                            />
                            <label
                              htmlFor="hembra"
                              className="cr"
                              style={{ opacity: 4.5 }}
                            >
                              Femenino
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <div class="d-flex justify-content-between">
                        <div>
                          <h6>Raza:</h6>
                        </div>
                      </div>
                      <hr style={{ color: "gray", height: 1 }} />
                      <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        isMulti={true}
                        placeholder="Seleccionar razas"
                      />
                      <br />
                      <br />
                      <div class="d-flex justify-content-between">
                        <div>
                          <h6>Máxima distancia:</h6>
                        </div>
                        <div style={{ color: "#f47386", fontWeight: "bolder" }}>
                          {this.state.defaultDistanciaMax} km.
                        </div>
                      </div>
                      <hr></hr>
                      <br />
                      <div style={style}>
                        <Slider
                          min={0}
                          max={50}
                          value={this.state.defaultDistanciaMax}
                          handle={handle}
                          onChange={this.handleChangeSlider}
                          handleStyle={{
                            border: "2px solid #f47386",
                            backgroundColor: "white"
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
                          {this.state.defaultEdad[0]} a{" "}
                          {(this.state.defaultEdad[1] || "").toString()} años
                        </div>
                      </div>
                      <hr></hr>
                      <br />
                      <div style={style}>
                        <Range
                          allowCross={false}
                          max={14}
                          defaultValue={this.state.defaultEdad}
                          onChange={this.handleChangeRange}
                          value={this.state.defaultEdad}
                          handleStyle={{
                            border: "2px solid #f47386",
                            backgroundColor: "white"
                          }}
                          trackStyle={[
                            {
                              background: "#f47386"
                            }
                          ]}
                        />
                      </div>
                      <br />
                      <br />
                      <center>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-primary shadow-2 mb-4"
                            onClick={this.handleSubmit}
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

const mapStateToProps = state => {
  // console.log("pet profile" + JSON.stringify(state.firebase.auth.uid))
  return {
    userId: state.firebase.auth.uid,
    authError: state.auth.authError
  };
};

export default connect(mapStateToProps)(FormNewPet);
