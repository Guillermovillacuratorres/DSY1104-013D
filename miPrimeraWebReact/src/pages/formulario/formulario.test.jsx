import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Formulario from "./formulario";
import { MemoryRouter } from "react-router-dom";



test('Probar el formulario, muestra los datos correctos' , () =>{
    render(
        <MemoryRouter>
            <Formulario/>
        </MemoryRouter>
    )
    const inputNombre = screen.getByLabelText('Nombre:');
    fireEvent.change(inputNombre, {target: {value: 'Juanito'}});
    expect(inputNombre.value).toBe('Juanit');
});