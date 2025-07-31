import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const ItemPelicula = () => {
    return (
        <div>
           <Card className="rounded-0">
                 <Card.Header>
                   <div className="d-flex align-items-center gap-3">
                     <img src="/cine.png" alt="imagen cine" style={{
                         width: "80px",
                         height: "80px",
                         borderRadius: "50%",
                       }}/>
                     <div className="d-flex flex-column">
                       <h5>Mascota: </h5>
                       <div className="d-flex gap-2">
                         <span>Dueño: </span>
                       </div>
                     </div>
                   </div>
                 </Card.Header>
                 <Card.Body>
                   <Form.Group className="mb-3" controlId="inputNombre">
                     <Form.Label className="mx-3">
                       <strong>Nombre:</strong>
                     </Form.Label>
                     <Form.Control
                       type="text"
                       placeholder="Ingrese el nombre de la película"
                     />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="inputDescripición">
                     <Form.Label className="mx-3">
                       <strong>Descripción:</strong>
                     </Form.Label>
                     <Form.Control as="textarea" rows={3} />
                   </Form.Group>
                   <Form.Group className="mb-3">
                     <Form.Label className="mx-3">
                       <strong>Género</strong>
                     </Form.Label>
                     <Form.Select aria-label="Seleccionar género" defaultValue="">
                       <option value="" disabled>
                         Seleccione un género
                       </option>
                       <option value="1">Comedia</option>
                       <option value="2">Drama</option>
                       <option value="3">Infantil</option>
                     </Form.Select>
                   </Form.Group>
                 </Card.Body>
                 <Card.Footer className="d-flex justify-content-end">
                   <Button className="rounded-0" variant="danger" >
                     Borrar
                   </Button>
                 </Card.Footer>
               </Card> 
        </div>
    );
};

export default ItemPelicula;