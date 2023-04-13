import Button from '../ui/button/button.component';
import './profileCard.styles.scss';

const ProfileCard = () => {
    return <div className='profile-card'>
        <div className="avatar">
            <span>J</span>
        </div>
        <div className="details">
            <h2>John</h2>
            <p className='contact'>(88) 99602-2404</p>
        </div>
        <div className='margin-left-auto'>
            <Button className='btn btn-secondary'>
                Log out
            </Button>
        </div>
    </div>
}

export default ProfileCard