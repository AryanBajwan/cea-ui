import React from 'react';
import heroImg from '../assets/hero.png'
import newsData from "./news.json"

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
        <div className="news">
            <div className="title">
                <h1>news</h1>
            </div>
            <div className='news-s'>
                <News />
            </div>
        </div>
    );
}

interface NewsAtomic {
    id: number;
    photo: string;
    desc: string;
}

const News = () => {
    return (
        <div className='news-atomic'>
            {newsData.length > 0 && <div className='line'></div>}
            {newsData && newsData.map((news: NewsAtomic) => (
                <React.Fragment key={news.id}>
                    <div className='news-article'>
                        <img src={news.photo} alt={news.desc} />
                        <p>{news.desc}</p>
                    </div>
                    <div className='line'></div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default Home;