import React, {useState, Fragment} from 'react'
import Header from './components/Header/Header'
import styled from 'styled-components'
import Formulario from './components/Formulario/Formulario'
import Resumen from './components/Resumen/Resumen'
import Resultado from './components/Resultado/Resultado'
import Spinner from './components/Spinner/Spinner'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

function App() {

  const [resumen, setResumen] = useState({})
  const [cargando, setCargando] = useState(false)
  const { cotizacion, datos } = resumen

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros"/>
      <ContenedorFormulario>
        <Formulario 
          setResumen={setResumen}
          setCargando={setCargando}
        />
        { cargando ? (<Spinner/>) : 
          datos &&
            (<Fragment>
              <Resumen datos={datos}/>
              <Resultado cotizacion={cotizacion}/>
            </Fragment> )
        }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
