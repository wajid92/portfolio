import './portfolio.css';
import IMG1 from '../../assets/food_order.PNG';
import IMG2 from '../../assets/weather.PNG';
import IMG3 from '../../assets/calculator.PNG';
import IMG4 from '../../assets/match.PNG';
import IMG5 from '../../assets/quiz.PNG';

const data = [
    {
        id:1,
        image: IMG1,
        title: 'Food Order',
        github: 'https://github.com/wajid92/food-order',
        demo: 'https://wajid92.github.io/food-order/',
    },
    {
        id:2,
        image: IMG2,
        title: 'Weather App',
        github: 'https://github.com/wajid92/my-weather',
        demo: 'https://wajid92.github.io/my-weather/',
    },
    {
        id:3,
        image: IMG3,
        title: 'Calculator',
        github: 'https://github.com/wajid92/calculator',
        demo: 'https://wajid92.github.io/calculator/',
    },
    {
        id:4,
        image: IMG4,
        title: 'Match App',
        github: 'https://github.com/wajid92/match',
        demo: 'https://wajid92.github.io/match/',
    },
    {
        id:5,
        image: IMG5,
        title: 'Quiz App',
        github: 'https://github.com/wajid92/quiz',
        demo: 'https://wajid92.github.io/quiz/',
    }
]

const Portfolio = () => {
    return (
        <>
            <section id='portfolio'>
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>

                <div className='container portfolio_container'>
                   {
                       data.map(({id, image, title, github, demo})=>{
                           return(
                            <article key={id} className='portfolio_item'>
                            <div className='portfolio_item_image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio_item_cta'>
                                <a href={github} className='btn' target='_blank'>Github</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                           )
                       })
                   }
                </div>
            </section>
        </>
    )
}

export default Portfolio;