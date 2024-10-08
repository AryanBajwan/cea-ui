import heroImg from '../assets/hero.png'
// import civilVid from '../assets/output.mp4'
// import civilVid from '../assets/civil-1.mp4'

import './home.css'

function Home() {

    return (
        <>
            <div className="hero">
                <div className="title">
                    <h1>Civil</h1>
                    <h1>Engineering</h1>
                    <h1>Association</h1>
                </div>
                <div className='hero-img'>
                    {/* <video autoPlay loop muted playsInline>
                        <source src={civilVid} type="video/mp4"/>
                    </video> */}
                    <img className='tilt' src={heroImg} alt="Hero Image" />
                </div>
            </div>
        </>
    );
}

export default Home;