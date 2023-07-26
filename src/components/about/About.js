import './about.css';
import ME from '../../assets/wajid.png';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
import {TbBrandCpp} from 'react-icons/tb';

const About =()=>{
    return (
        <>
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me_image'>
                        <img src={ME} alt='about image'/>
                    </div>
                </div>

                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>1+ Year</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'/>
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                        <article className='about_card'>
                            <TbBrandCpp className='about_icon'/>
                            <h5>DSA Questions</h5>
                            <small>300+ Solved</small>
                        </article>
                        
                        </div>
                        <p>
                            I am pursuing B.Tech in Electronics and Communication Engineering from Jamia Millia Islamia, batch(2020-24).
                            I am a Frontend developer right now and also proceeding to become a Fullstack developer. I have solved
                            more than 300 DSA questions on Leetcode and GFG. I have also done open source contribution in Hacktoberfest
                            2022.<br/>
                            My skills includes: <b>HTML, CSS, Javascript, Reactjs, C, C++, SQL</b>
                        </p>
                        
                        
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;