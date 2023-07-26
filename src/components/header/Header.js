import './header.css';
import CTA from './CTA';
import ME from '../../assets/png1.png';
import HeaderSocial from './HeaderSocials';

const Header=()=>{
    return(
        <header>
            <div className='container header_container'>
                <h5>Hello I'm</h5>
                <h1>Mohammad Wajid Ali</h1>
                <h5 className='text-light'>Frontend Developer</h5>
                <CTA />
                <HeaderSocial/>
                <div className='me'>
                    <img src={ME} alt="Profile pic"/>
                </div>

                <a href='#contact' className='scroll_down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header;