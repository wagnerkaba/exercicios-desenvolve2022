

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Conta from './Conta';
describe('Componente de conta', () => {
    it('Exibir o saldo da conta como valor monetário', () => {
        render(<Conta saldo={1000} />)

        const saldo = screen.getByTestId('saldo-conta');
        expect(saldo.textContent).toBe('R$ 1000');

    })

    it('Chama a função de realizar transação, quando o botão é clicado', ()=>{

        //Para entender melhor este teste, veja nota de aula 4.07

        // You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked.
        const funcaoRealizarTransacao = jest.fn();
        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao}/>);

        // simula um clique no botão 'Realizar operação'
        fireEvent.click(screen.getByText('Realizar operação'));

        expect(funcaoRealizarTransacao).toHaveBeenCalled();
    })
})