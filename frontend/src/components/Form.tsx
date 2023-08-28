import {Container, Button, InputGroup } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import { Component, ChangeEvent } from "react";
import TutorialDataService from "../services/tutorial.service";
import {resultProps} from "../interfaces/Publications"


type Props = {};

type State = resultProps & {
  submitted: boolean
  published: boolean
  rutUsuario: string
};


export default class AddTutorial extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.saveTutorial = this.saveTutorial.bind(this);
      this.newTutorial = this.newTutorial.bind(this);
      this.onChangeFoto = this.onChangeFoto.bind(this);
      this.onChangePrecio = this.onChangePrecio.bind(this);
      this.onChangeEstado = this.onChangeEstado.bind(this);
      this.onChangeIdProducto = this.onChangeIdProducto.bind(this);
      this.onChangeRut = this.onChangeRut.bind(this);

  
/*  idPublicacion: string
  rutUsuario: 21.479.053-4
  idProducto: string
  fotoPublicacion: string
  precioPublicacion: number
  estadoPublicacion: EstadosPublicacion
  tituloPublicacion: string
  descripcionPublicacion: string */

//  { submitted, tituloPublicacion, descripcionPublicacion, estadoPublicacion, precioPublicacion, fotoPublicacion }

      this.state = {
        rutUsuario: "21.439.053-4",
        idPublicacion: "",
        idProducto: "78dd99bb-8433-46fd-9dff-20fb79f892f0",
        fotoPublicacion: "",
        precioPublicacion: 0,
        estadoPublicacion: "",
        tituloPublicacion: "",
        descripcionPublicacion: "",
        submitted: false,
        published: false
      };
    }
  
    onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
      this.setState({
        tituloPublicacion: e.target.value
      });
    }

    onChangeRut(e: ChangeEvent<HTMLInputElement>) {
      this.setState({
        rutUsuario: e.target.value
      });
    }

    onChangeIdProducto(e: ChangeEvent<HTMLInputElement>) {
      this.setState({
        idProducto: e.target.value
      });
    }

    onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
          descripcionPublicacion: e.target.value
        });
    }
  
    onChangeFoto(e: ChangeEvent<HTMLInputElement>) {
      this.setState({
        fotoPublicacion: e.target.value
      });
    }

    onChangeEstado(e: ChangeEvent<HTMLSelectElement>) {
        this.setState({
          estadoPublicacion: e.target.value
        });
    }

    onChangePrecio(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
          precioPublicacion: e.target.valueAsNumber
        });
    }

  /*
      {
        "fotoPublicacion": "https://via.placeholder.com/150/f684ab",
        "precioPublicacion": 500,
        "estadoPublicacion": "Bueno",
        "tituloPublicacion": "Algo",
        "descripcionPublicacion": "La encontre en un mal estado para su venta",
        "rutUsuario": "21.439.053-4",
        "idProducto": "78dd99bb-8433-46fd-9dff-20fb79f892f0"
    }
  */
    saveTutorial(e: React.FormEvent<HTMLFormElement>) { 
      e.preventDefault()
      const data:any | resultProps = {
        tituloPublicacion: this.state.tituloPublicacion,
        descripcionPublicacion: this.state.descripcionPublicacion,
        fotoPublicacion: this.state.fotoPublicacion,
        precioPublicacion: this.state.precioPublicacion,
        estadoPublicacion: this.state.estadoPublicacion,
        rutUsuario: this.state.rutUsuario,
        idProducto: this.state.idProducto
      };
      console.log(data)
      TutorialDataService.create(data)
      this.newTutorial()
        /*.then((response: any) => {
          this.setState({
            idPublicacion: response.data.idPublicacion,
            tituloPublicacion: response.data.titulo,
            descripcionPublicacion: response.data.descripcion,
            estadoPublicacion: response.data.estado,
            fotoPublicacion: response.data.foto,
            precioPublicacion: response.data.precio,
            rutUsuario: response.data.rut,
            idProducto: response.data.idProducto,
            published: response.data.published,
            submitted: true
          });
          
          //console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });*/
    }
  
    newTutorial() {
      this.setState({
        rutUsuario: "",
        idProducto: "",
        idPublicacion: "",
        tituloPublicacion: "",
        descripcionPublicacion: "",
        fotoPublicacion: "",
        precioPublicacion: 0,
        published: false,
        submitted: false
      });
    }
    render() {
        const {idProducto, rutUsuario, submitted, tituloPublicacion, descripcionPublicacion, estadoPublicacion, precioPublicacion, fotoPublicacion } = this.state;

    return (
        <Container>
            <Form validated={submitted} onSubmit={this.saveTutorial} >
            <Form.Group className="mb-3">
              <Form.Label >User DNI</Form.Label>
              <Form.Control required value={rutUsuario} onChange={this.onChangeRut} placeholder="Rut" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label >Product ID</Form.Label>
              <Form.Control required value={idProducto} onChange={this.onChangeIdProducto} placeholder="id Producto" />
            </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Titulo</Form.Label>
                    <Form.Control required value={tituloPublicacion} onChange={this.onChangeTitle} type="title" placeholder="Titulo Publicacion" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Link Foto</Form.Label>
                    <Form.Control required value={fotoPublicacion} onChange={this.onChangeFoto} placeholder="https://..." />
                </Form.Group>
                <Form.Label>Estado Producto</Form.Label>
                <Form.Select required value={estadoPublicacion} onChange={this.onChangeEstado} className="mb-3" aria-label="Default select example">
                    <option value="Bueno">Bueno</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Malo">Malo</option>
                </Form.Select>
                <Form.Label>Precio Producto</Form.Label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control required value={precioPublicacion} onChange={this.onChangePrecio} type="number" placeholder="Valor Producto" />
                    </Form.Group>
                <Form.Group className="mb-3" controlId="descripccion">
                    <Form.Label>Descripccion</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Descripccion" aria-required value={descripcionPublicacion} onChange={this.onChangeDescription}/>
                </Form.Group>
                <Button className="btn btn-success" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )

    }
}
