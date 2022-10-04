import './banner.css';
import img1 from './img/1.jpg';

function banner_image(){
    return (
        <div className="banner">
                <img src={img1} alt=''/>
        </div>
    )
}
export default banner_image;