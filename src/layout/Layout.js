import SiFalso from '../shared/si-falso/SiFalso';
import SiVerdadero from '../shared/si-verdadero/SiVerdadero';
import './Layout.css';

function Layout() {
    /* Cambia este valor / Change this value */
    const isTrue = true;

    return (
        <div className="layout">
            {isTrue ? <SiVerdadero/> : <SiFalso/> }
        </div>
    );
}

export default Layout;