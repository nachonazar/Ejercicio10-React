import React from "react";
import { Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <div>
      <h1 className="text-center mt-4 mb-4">Alta de Películas</h1>
      <Form className="mx-5">
        <Form.Group className="mb-3" controlId="inputNombre">
          <Form.Label className="mx-3"><strong>Nombre:</strong></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre de la película"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputDescripición">
          <Form.Label className="mx-3"><strong>Descripción:</strong></Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mx-3"><strong>Género</strong></Form.Label>
          <Form.Select aria-label="Seleccionar género" defaultValue="">
            <option value="" disabled>
              Seleccione un género
            </option>
            <option value="1">Comedia</option>
            <option value="2">Drama</option>
            <option value="3">Infantil</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Formulario;
