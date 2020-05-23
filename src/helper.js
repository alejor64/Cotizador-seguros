export function obtenerDiferenciaYear (year) {
    return new Date().getFullYear() - year
}


export function calcularMarca (marca) {
    let incrementoMarca

    switch(marca){
        case 'europeo':
            incrementoMarca = 1.1
            break

        case 'americano':
            incrementoMarca = 1.15
            break

        case 'asiatico':
            incrementoMarca = 1.3
            break
        
        default:
            break
    }

    return incrementoMarca
}


export function calcularPlan (plan) {
    let incrementoPlan

    switch(plan){
        case 'basico':
            incrementoPlan = 1.2
            break
        
        case 'completo':
            incrementoPlan = 1.5
            break

        default:
            break

    }

    return incrementoPlan
}


export function primerMayuscula (texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}