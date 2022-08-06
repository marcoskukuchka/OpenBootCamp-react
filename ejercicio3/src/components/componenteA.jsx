import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../class/contacto.class';
import ComponenteB from './componenteB.jsx';


const ComponenteA = ({contacto}) => {
    return (
        <div>
	        <p>Nombre: {contacto.nombre}</p>
	        <p>Apellido: {contacto.apellido}</p>
	        <p>Email: {contacto.email}</p>
            <ComponenteB estado={false}/>
	    </div>
	    );
};


ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteA;