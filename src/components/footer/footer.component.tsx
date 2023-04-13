
import Button from '../ui/button/button.component'
import './footer.styles.scss';

const Footer = () => {
    return <footer className='mt-3'>
        <Button className='btn btn-transparent'>Previous</Button>
        <Button className='btn btn-primary'>Next</Button>
    </footer>
}

export default Footer