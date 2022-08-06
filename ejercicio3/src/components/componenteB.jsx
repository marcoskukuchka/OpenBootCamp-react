import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ComponenteB = (props) => {
    
    const [conectado, setConectado] = useState(props.estado);

    const cambiaEstado = () => {
        setConectado(!conectado)
    }

    return (
        <div>
	        <p>{conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}</p>
            <button onClick={cambiaEstado}>Cambiar estado</button>
	    </div>
	    );
};


ComponenteB.propTypes = {
    estado: PropTypes.bool
};


export default ComponenteB;