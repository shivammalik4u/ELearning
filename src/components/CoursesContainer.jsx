import React from 'react'
import Ratings from './Small Components/Ratings';
import AI from '../Images/AI.jpg'
import DA from '../Images/Data Analytics.jpg'
import DS from '../Images/Data Science.jpg'
import DM from '../Images/Digital Marketing.jpg'
import JAVA from '../Images/Java.jpg'
import ML from '../Images/Machine Learning.jpg'
import Robotics from '../Images/Robotics.jpg'
import Statistics from '../Images/Statistics.jpg'


const CourseCard = ({ title, description, rating, author, price, Image }) => (
    <div className="col mb-4">
        <div className="card">
            <img src={Image} className="card-img-top" alt="Course Thumbnail" />
            <div className='d-flex justify-content-between p-2'>
                <span className='m-2'><i className="bi bi-card-checklist"> Lessons</i></span>
                <span className='m-2'><i className="bi bi-clock"> Time</i></span>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className='card-text mb-1'>{description}</p>
                <Ratings rating={rating} />
                <hr className="border-bottom" />
                <div className='d-flex justify-content-between'>
                    <span className='m-2'><i className="bi bi-person"> {author}</i></span>
                    <span className='m-2'>{price}</span>
                </div>
            </div>

        </div>
    </div>
);


const CoursesContainer = () => {
    const courses = [
        { title: 'Artificial Intelligence', description: 'Description about Artificial Intelligence Course', rating: 4.5, author: 'Author', price: '$450', Image: `${AI}` },
        { title: 'Machine Learning', description: 'Description about Machine Learning Course', rating: 5, author: 'Author', price: '$450', Image: `${ML}` },
        { title: 'Data Analyst', description: 'Description about Data Analyst Course', rating: 4.5, author: 'Author', price: '$450', Image: `${DA}` },
        { title: 'Data Science', description: 'Description about Data Science Course', rating: 4.5, author: 'Author', price: '$450', Image: `${DS}` },
        { title: 'DM', description: 'Description about Digital Marketing Course', rating: 4.5, author: 'Author', price: '$450', Image: `${DM}` },
        { title: 'Robotics', description: 'Description about Robotics Course', rating: 4.5, author: 'Author', price: '$450', Image: `${Robotics}` },
        { title: 'Statistics', description: 'Description about Statistics Course', rating: 4.5, author: 'Author', price: '$450', Image: `${Statistics}` },
        { title: 'Java Development', description: 'Description about Java Development Course', rating: 4.5, author: 'Author', price: '$450', Image: `${JAVA}` }
    ];

    return (
        <div className="container mt-4">
            <div className='d-flex'>
                <h2 className="mb-4">Featured Courses</h2>
            </div>
            <div className="container d-flex ">
                <div className='row'>
                    {courses.map((course, index) => (
                        <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                            <CourseCard {...course} className="h-100" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default CoursesContainer;