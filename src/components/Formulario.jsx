import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form"
import ListaPeliculas from "./ListaPeliculas";

const Formulario = () => {
  const [peliculas, setPeliculas] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const agregarPeliculas = (data) => {
    setPeliculas([...peliculas, data]);
    reset();
  };

  return (
    <div>
      <h1 className="text-center mt-4 mb-4">Alta de Películas</h1>
      <Form className="mx-5" onSubmit={handleSubmit(agregarPeliculas)}>
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
        <div className="d-flex justify-content-end mt-5">
          <Button className="mt-5" variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
      <ListaPeliculas peliculas={peliculas}></ListaPeliculas>
    </div>
  );
};

export default Formulario;
