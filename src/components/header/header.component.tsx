import './header.styles.scss';
import { IoCloseOutline } from 'react-icons/io5';


const Header = () => {
    return (
        <header>
            <p>
                Choose the form of payment
            </p>
            <span>
                <IoCloseOutline className="close" />
            </span>

        </header>
    )
}

export default Header;