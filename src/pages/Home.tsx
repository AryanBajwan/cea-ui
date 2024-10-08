import heroImg from '../assets/hero.png'

import './home.css'

function Home() {

    return (
        <>
            <HeroSection />
            <NewsSection />
        </>
    );
}

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="title">
                <h1>Civil</h1>
                <h1>Engineering</h1>
                <h1>Association</h1>
            </div>
            <div className='hero-img'>
                <img className='tilt' src={heroImg} alt="Hero Image" />
            </div>
        </div>
    );
}

const NewsSection = () => {
    return (
        <div>
            <h1>News Section</h1>
        </div>
    );
}

export default Home;