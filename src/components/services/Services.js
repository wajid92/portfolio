import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services=()=>{
    return(
        <>
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services_container'>
                <article className='service'>
                    <div className='service_head'>
                        <h3>UI/UX Designer</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>I will design a beautiful UI.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Responsive design will be provided.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Modern design and animations.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Good code quality.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Modifications if required.</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service_head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Beautiful UI will be used.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Responsive design will be provided.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Modern design and animations.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Good code quality.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Modifications if required.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Free images will be used if required.</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service_head'>
                        <h3>Content Writer</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>A Unique article for you.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Seo optimised article.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Correct facts will be used.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Will revise the content if neccessary.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list_icon'/>
                            <p>Free images will be used if required.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
        </>
    )
}

export default Services;