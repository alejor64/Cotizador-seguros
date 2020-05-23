import React from 'react'
import PropTypes from 'prop-types'
import { ContenedorResumen } from './ContenedorResumen'
import {primerMayuscula} from '../../helper'

const Resumen = ({datos}) => {

    const { marca, year, plan } = datos

    return (
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li><strong>Marca:</strong> {primerMayuscula(marca)}</li>
                <li><strong>Año:</strong> {year}</li>
                <li><strong>Plan:</strong> {primerMayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>
    )
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen
