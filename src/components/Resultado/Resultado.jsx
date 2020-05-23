import React from 'react'
import PropTypes from 'prop-types'
import { TextoCotizacion, ResultadoCotizacion } from './ContenedorResultado'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Resultado = ({cotizacion}) => {
    return (
        <ResultadoCotizacion>
            <TransitionGroup
                component="span"
                className="resultado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{enter: 500, exit: 500}}
                >
                    <TextoCotizacion>El total es: $<span>{cotizacion}</span> dolares</TextoCotizacion>
                </CSSTransition>
            </TransitionGroup>
        </ResultadoCotizacion>
    )
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado
