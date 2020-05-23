import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Campo } from './Campo'
import { Label } from './Label'
import { Select } from './Select'
import { InputRadio } from './InputRadio'
import { Boton } from './Boton'
import { Error } from './Error'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan } from '../../helper'

const Formulario = ({ setResumen, setCargando }) => {

    const initialState = {
        marca: '',
        year: '',
        plan: ''
    }

    const [datos, setDatos] = useState(initialState)
    const [error, setError] = useState(false)

    const {marca, year, plan} = datos

    const obtenerInformacion = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = (e) => {
        e.preventDefault()
        if(!marca.trim() || !year.trim() || !plan.trim()){
            setError(true)
            return
        }

        setError(false)

        let baseSeguro = 2000

        const diferencia = obtenerDiferenciaYear(year)

        baseSeguro += ((diferencia*0.3)*baseSeguro)

        let incrementoMarca = calcularMarca(marca)

        baseSeguro = (baseSeguro*incrementoMarca)
        
        let incrementoPlan = calcularPlan(plan)
        
        baseSeguro = parseFloat(baseSeguro*incrementoPlan).toFixed(2)

        setCargando(true)

        setTimeout(() => {

            setCargando(false)

            setResumen({
                cotizacion: Number(baseSeguro),
                datos
            })
        }, 1000)

    }

    return (
        <form
            onSubmit={cotizarSeguro}
        >
            {
                error && <Error>Todos los campos son obligatorios</Error>
            }
            <Campo>
                <Label>Marca del auto</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año del auto</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked= {plan === "basico"}
                    onChange={obtenerInformacion}
                />Básico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked= {plan === "completo"}
                    onChange={obtenerInformacion}
                />Completo
            </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>
    )
}

Formulario.propTypes = {
    setResumen: PropTypes.func.isRequired,
    setCargando: PropTypes.func.isRequired
}

export default Formulario
