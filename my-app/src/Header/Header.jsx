import { useLocation } from 'react-router-dom';

function Header() {
const location = useLocation();
    return (
        <h1 className="header">
            {location.pathname.slice(1)}
        </h1>
    )
}
export default Header