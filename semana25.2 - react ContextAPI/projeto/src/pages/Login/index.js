import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Button,
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UsuarioContext } from 'common/context/Usuario';

function Login() {
  const history = useHistory();
  return (
    <Container>
      <UsuarioContext.Consumer>
        {
          ({nome,setNome,saldo,setSaldo}) => (
            <>
              <Titulo>
                Insira o seu nome
              </Titulo>
              <InputContainer>
                <InputLabel>
                  Nome
                </InputLabel>
                <Input
                  type="text"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>
                  Saldo
                </InputLabel>
                <Input
                  type="number"
                  value={saldo}
                  onChange={(event) => setSaldo(event.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      R$
                    </InputAdornment>
                  }
                />
              </InputContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push('/feira')}
              >
                Avançar
              </Button>
            </>
          )
        }

      </UsuarioContext.Consumer>
    </Container>
  )
};

export default Login;