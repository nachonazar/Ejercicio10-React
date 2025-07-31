import React, { useEffect, useState } from "react";
import { Form, Button, FormText } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ListaPeliculas from "./ListaPeliculas";

const Formulario = () => {
  const peliculasLocalstorage = JSON.parse(localStorage.getItem("listaPeliculas")) || []
  const [peliculas, setPeliculas] = useState(peliculasLocalstorage);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    localStorage.setItem("listaPeliculas", JSON.stringify(peliculas))
  }, [peliculas])

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
            {...register("inputNombre", {
              required: "El nombre de la película es obligatorio",
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 100,
                message: "El nombre puede tener como máximo 100 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s:,.!?'"()\-]{2,100}$/,
                message:
                  "El nombre solo puede contener letras, números y algunos signos básicos",
              },
            })}
          />
          {errors.inputNombre && (
            <FormText className="text-danger mx-3">
              {errors.inputNombre.message}
            </FormText>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputDescripción">
          <Form.Label className="mx-3">
            <strong>Descripción:</strong>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("inputDescripción", {
              required: "La descripción es obligatoria",
              minLength: {
                value: 10,
                message: "Debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 500,
                message: "Máximo 500 caracteres permitidos",
              },
              pattern: {
                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,;:¡!¿?'"()\-]+$/,
                message:
                  "Solo se permiten letras, números y signos básicos de puntuación",
              },
            })}
          />
          {errors.inputDescripción && (
            <FormText className="text-danger mx-3">
              {errors.inputDescripción.message}
            </FormText>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputGénero">
          <Form.Label className="mx-3">
            <strong>Género</strong>
          </Form.Label>
          <Form.Select
            aria-label="Seleccionar género"
            defaultValue=""
            {...register("inputGénero", {
              required: "Seleccionar un género es obligatorio",
              validate: (value) =>
                ["comedia", "drama", "infantil"].includes(value) ||
                "El género seleccionado no es válido",
            })}
          >
            <option value="" disabled>
              Seleccione un género
            </option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
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
