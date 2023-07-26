import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';

const HeaderSocial =()=>{
    return(
        <>
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/mohammad-wajid-ali-95b8001b7" target="_blank"><BsLinkedin/></a>
            <a href="https://www.github.com/wajid92" target="_blank"><FaGithub/></a>
            <a href="https://www.leetcode.com/wajidali786/" target='_blank'><SiLeetcode/></a>
        </div>
        </>
    )
}

export default HeaderSocial;