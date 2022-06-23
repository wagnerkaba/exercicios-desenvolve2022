import React from "react";
import { render, screen } from '@testing-library/react';
import App, {calcularNovoSaldo} from './App';


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

    describe('Quando uma transação é realizada...', ()=>{
        it('se é um saque, o valor vai diminuir', ()=>{

            // Neste teste, nenhum componente é renderizado porque não se está testando um componente
            // Está se testando apenas a função "calcularNovoSaldo"
            const valores = {
                transacao: 'saque',
                valor: 50
            }

            const novoSaldo = calcularNovoSaldo(valores, 150);
            expect(novoSaldo).toBe(100);
        })
    })
})



