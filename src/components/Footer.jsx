import React from 'react'


const Footer = () => {
    return (
        <footer className="p-5 bg-dark text-light">
            <div className="row"><div className="col">
                <a href="#" className="d-flex align-items-center mb-3 link-dark text-decoration-none text-light">EDMITRA LOGO
                    <svg className="bi me-2" width="40" height="32"></svg>
                </a>
                <p className="text-decoration-none text-light">© 2023</p>
            </div>


                <div className="col-2">
                    <h5>Menu</h5>
                    <ul className="nav flex-column text-light">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-decoration-none text-light">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-decoration-none text-light">Category</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-decoration-none text-light">Courses</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-decoration-none text-light">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-decoration-none text-light">About</a></li>
                    </ul>
                </div>

                <div className="col-2">
                    <h5>Others</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-decoration-none text-light">Our Aim</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-decoration-none text-light">Pricing</a></li>
                    </ul>
                </div>


                <div className="col-4 offset-1">
                    <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly digest of whats new and exciting from us.</p>
                        <div className="d-flex w-100 gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                            <button className="btn btn-primary" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="d-flex justify-content-between py-4 my-4 border-top">
                <p>© 2023 EDMITRA, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3"><a className="link-dark" href="#">Facebbok<svg className="bi" width="24" height="24"></svg></a></li>
                    <li className="ms-3"><a className="link-dark" href="#">Instagram<svg className="bi" width="24" height="24"></svg></a></li>
                    <li className="ms-3"><a className="link-dark" href="#">Linked In<svg className="bi" width="24" height="24"></svg></a></li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;