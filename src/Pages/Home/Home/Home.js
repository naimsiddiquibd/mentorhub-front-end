import React from 'react';
import Banner from '../Banner/Banner';
import SkillSector from '../SkillSector/SkillSector';
import './Home.css'
import BlogSection from '../BlogSection/BlogSection';
import BookOurMentors from '../BookOurMentors/BookOurMentors';

const Home = () => {
    return (
        <div className='mx-5 my-10'>
            <Banner></Banner>
            <SkillSector></SkillSector>
            <BookOurMentors></BookOurMentors>
            <BlogSection></BlogSection>
        </div>
    );
};

export default Home;