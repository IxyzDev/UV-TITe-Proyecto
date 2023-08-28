//import Fetching from "../data/axios"
import { Button, Card, Image } from "react-bootstrap"
import axios from "axios"
import { resultProps } from "../interfaces/Publications";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function ShowPublications() {
//Fetching con axios
  const [result, setResult] = useState<resultProps[]>([]);
  const api = async () => {
      axios({
        method: 'get',
        url: 'http://localhost:3000/publicacion/mostrar',
      })
      .then(function (response:any) {
        setResult(response?.data)
      }).catch((err)=>{
        console.log(err)
      })
  };
  useEffect(() => {
    console.log("A")
    api();
  }, []);
  return(
    <div className="App">
      {result?.map((value: resultProps) => {
        return (
          <Card style={{width: '30rem'}}  key={value.idPublicacion}>
            <Button style={{ position: "relative" }}>
            <Image src={value.fotoPublicacion} alt="Card image cap" height="150" width="150" />
              <Card.Body>
                <Card.Title>{value.tituloPublicacion}</Card.Title>
                <Card.Text style={{width:'26rem'}}>
                  <Card.Text>{value.precioPublicacion}</Card.Text>
                  <Card.Text>{value.estadoPublicacion}</Card.Text>
                  <Card.Text>{value.descripcionPublicacion}</Card.Text>
                </Card.Text>
              </Card.Body>
              </Button>
          </Card>
        );
      })}
  </div>
  )
}

//<Image src="https://pixabay.com/es/photos/enlace-piezas-url-explorador-corto-5219567/" alt="Card image cap" height="150" width="150" />
//<Image src={value.fotoPublicacion} alt="Card image cap" height="150" width="150" />
/* [valores que ma faltan por usar ]

  idProducto: string
  
//           //<Card.Img variant='top' src='banana.jpg' alt="Card image cap" height="350vw" />
*/

/* [Interfaz default]
  idPublicacion: string
  idProducto: string
  fotoPublicacion: string
  precioPublicacion: number
  estadoPublicacion: string
  tituloPublicacion: string
  descripcionPublicacion: string 
*/