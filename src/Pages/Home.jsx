import React from 'react'
import Carousal from '../components/Carousal';
import CoursesContainer from '../components/CoursesContainer';
import ImageCard from '../components/ImageCard';
import Card from '../components/Card';
import BlogCard from '../components/BlogCard';

const Home = () => {
    return (
        <>
            <Carousal />
            <CoursesContainer />
            <Card />
            <ImageCard />
            <BlogCard />
        </>
    )
}

export default Home;