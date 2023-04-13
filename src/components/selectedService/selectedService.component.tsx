import './selectedService.styles.scss';
import Service from '../../assets/service.png';
import { CiLocationOn } from 'react-icons/ci';
import { CiCalendar } from 'react-icons/ci';

const SelectedService = () => {
    return <div className="selected-service mt-1">
        <h2>Selected Service</h2>
        <div className="card mt-1">
            <div className='img-wrap'>
                <img src={Service} alt="service" />
            </div>
            <div className="details">
                <h3>Japanese lessons</h3>
                <p>
                    <CiCalendar className='inline-icon-bold' /> Nov 7, 2020・11:30
                </p>
                <p>
                    <CiLocationOn className='inline-icon-bold' /> Client's place
                </p>
                <h3>Rp 350.000</h3>
            </div>
        </div>
    </div>
}

export default SelectedService