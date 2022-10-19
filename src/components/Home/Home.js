import React from 'react';
import './Home.module.css'
const Home = () => {
    return (
        <div>
            <header style={{ paddingLeft: 0 }}>
                <div
                    className='p-5 text-center bg-image'
                    style={{}}
                >
                    <div className='mask text-bgg' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>Heading</h1>
                                <h4 className='mb-3'>Subheading</h4>
                                <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                    Call to action
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;