import SiFalso from '../shared/si-falso/SiFalso';
import SiVerdadero from '../shared/si-verdadero/SiVerdadero';
import './Layout.css';

function Layout() {
    return (
        <div className="layout">
            <SiVerdadero />
            <SiFalso/>
        </div>
    );
}

export default Layout;