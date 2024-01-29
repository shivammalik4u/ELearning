import React from 'react'
import Carousal3 from '../Images/Carousal 3.jpg'

const Card = () => {

    const containerStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1518548235008-15c2e3a4fdd3?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px',
        width: '48%'
    };


    return (
        <div className=' container d-flex justify-content-center align-items-center p-0'>
            <div className='row d-flex justify-content-between'>
                <div class="card m-2" style={containerStyle}>
                    <div className="card-body">
                        <div className='d-flex-column col-md-8'>
                            <h4 className="card-subtitle mb-2 text-dark">Get Unlimeted access to multiple courses</h4>
                            <button className='btn btn-primary'>Click me</button>
                        </div>
                    </div>
                </div>
                <div class="card m-2" style={containerStyle}>
                    <div className="card-body">
                        <div className='d-flex-column col-md-8'>
                            <h4 className="card-subtitle mb-2 text-dark">Best Instructors in the world</h4>
                            <button className='btn btn-primary'>Click me</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card;