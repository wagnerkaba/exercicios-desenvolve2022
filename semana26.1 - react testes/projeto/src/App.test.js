import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';


describe('Componente principal', () => {

    describe('Quando o app do banco é iniciado...', () => {
        test('o nome do banco é exibido', () => {
            //OBS: 'test()' e 'it()' servem para a mesma coisa
            render(<App />);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        });

        it('o saldo é exibido', () => {
            render(<App />);
            expect(screen.getByText('Saldo:')).toBeInTheDocument()
        });

        it('o botão de "Realizar operação" é exibido', () => {
            render(<App />);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument()
        });


    });



})

