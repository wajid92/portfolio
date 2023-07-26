import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const Footer=()=>{
    return(
        <>
        <footer>
            <a href='#' className='footer_logo'>Wajid Portfolio</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer_socials'>
                <a href='https://m.facebook.com/profile.php?id=100037298980442'><FaFacebook/></a>
                <a href='https://www.instagram.com/mohammad_wajid_ali'><FiInstagram/></a>
            </div>

            <div className='footer_copyright'>
                <small>&copy; Wajid Portfolio. All rights reserved.</small>
            </div>
        </footer>
        </>
    )
}

export default Footer;