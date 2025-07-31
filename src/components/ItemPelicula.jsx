import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const ItemPelicula = ({ pelicula }) => {
  return (
    <div>
      <Card className="rounded-0 mb-5 mt-4">
        <Card.Header>
          <div className="d-flex align-items-center gap-3">
            <img
              src="/cine.png"
              alt="imagen cine"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              }}
            />
            <div className="d-flex flex-column">
              <h2>{pelicula.inputNombre}</h2>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="inputNombre">
            <Form.Label className="mx-3">
              <strong>Nombre:</strong>
            </Form.Label>
            <Form.Control type="text" value={pelicula.inputNombre} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputDescripción">
            <Form.Label className="mx-3">
              <strong>Descripción:</strong>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={pelicula.inputDescripción}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputGenero">
            <Form.Label className="mx-3">
              <strong>Género:</strong>
            </Form.Label>
            <Form.Select value={pelicula.inputGénero} disabled>
              <option value="comedia">Comedia</option>
              <option value="drama">Drama</option>
              <option value="infantil">Infantil</option>
            </Form.Select>
          </Form.Group>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemPelicula;
