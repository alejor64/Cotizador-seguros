import React from 'react'
import PropTypes from 'prop-types'
import { ContenedorHeader } from './contenerdorHeader'
import { TextoHeader } from './textoHeader'

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header
