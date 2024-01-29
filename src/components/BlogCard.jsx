import React from 'react'

const BlogCard = () => {

    const containerStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1585237017203-04481e5bfa87?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px',
        width: '500px',
        height: '500px'
    };

    return (
        <div class="container-xxl py-5 bg-light bg-gradient" >
            <div class="container">
                <div class="text-center">
                    <h1 class="display-4 mb-3">Our Latest Blog</h1>
                </div>
                <div className=' container d-flex justify-content-center align-items-center p-0'>
                    <div className='row align-item-center justify-content-center'>
                        <div class="card m-2 col-md-5" style={containerStyle}>
                            <div className="card-body d-flex-column justify-content-evenly">
                                <div>
                                    <span className="badge bg-primary mb-2">Primary</span>
                                    <h4 className="card-subtitle mb-2 text-dark">Get Unlimeted access to multiple courses</h4>
                                    <button className='btn btn-primary'>Click me</button>
                                </div>
                            </div>
                        </div>
                        <div class="card m-2 col-md-5" style={containerStyle}>
                            <div className="card-body">
                                <div className='d-flex-column col-md-8'>
                                    <span className="badge bg-primary mb-2">Primary</span>
                                    <h4 className="card-subtitle mb-2 text-dark">Best Instructors in the world</h4>
                                    <button className='btn btn-primary'>Click me</button>
                                </div>
                            </div>
                        </div>
                        <div class="card m-2 col-md-5" style={containerStyle}>
                            <div className="card-body">
                                <div className='d-flex-column col-md-8'>
                                    <span className="badge bg-primary mb-2">Primary</span>
                                    <h4 className="card-subtitle mb-2 text-dark">Best Instructors in the world</h4>
                                    <button className='btn btn-primary'>Click me</button>
                                </div>
                            </div>
                        </div>
                        <div class="card m-2 col-md-5" style={containerStyle}>
                            <div className="card-body">
                                <div className='d-flex-column col-md-8'>
                                    <span className="badge bg-primary mb-2">Primary</span>
                                    <h4 className="card-subtitle mb-2 text-dark">Best Instructors in the world</h4>
                                    <button className='btn btn-primary'>Click me</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default BlogCard;