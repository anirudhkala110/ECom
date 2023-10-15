import React, { useEffect, useState } from 'react'
import Product from './Product'
import I1 from './1.png'
import I2 from './2.png'
import I3 from './3.png'
import I4 from './4.png'
import I5 from './5.png'
import I6 from './6.png'

const Home = () => {
    const [row1, setRow1] = useState([
        { name: '1.jpg', title: 'New Brand', rating: Math.floor(Math.random() * 6) },
        { name: '2.jpg', title: 'Exclusive', rating: Math.floor(Math.random() * 6) },
        { name: '3.jpg', title: 'Nike', rating: Math.floor(Math.random() * 6) },
        { name: '4.jpg', title: 'Nikkon', rating: Math.floor(Math.random() * 6) },
        { name: '5.jpg', title: 'ExtraOrdinary', rating: Math.floor(Math.random() * 6) },
        { name: '6.jpg', title: 'Blooms', rating: Math.floor(Math.random() * 6) },
        { name: '7.jpg', title: 'Navaster', rating: Math.floor(Math.random() * 6) },
    ]);

    const row2 = [
        { name: '8.jpg', title: 'Nike', rating: Math.floor(Math.random() * 6) },
        { name: '9.jpg', title: 'Adidas', rating: Math.floor(Math.random() * 6) },
        { name: '10.jpg', title: 'Apple', rating: Math.floor(Math.random() * 6) },
        { name: '11.jpg', title: 'Samsung', rating: Math.floor(Math.random() * 6) },
        { name: '12.jpg', title: 'Google', rating: Math.floor(Math.random() * 6) },
        { name: '13.jpg', title: 'Amazon', rating: Math.floor(Math.random() * 6) },
        { name: '14.jpg', title: 'Microsoft', rating: Math.floor(Math.random() * 6) },
    ];

    const row3 = [
        { name: '21.jpg', title: 'Coca-Cola', rating: Math.floor(Math.random() * 6) },
        { name: '20.jpg', title: 'McDonald\'s', rating: Math.floor(Math.random() * 6) },
        { name: '19.jpg', title: 'Toyota', rating: Math.floor(Math.random() * 6) },
        { name: '18.jpg', title: 'Sony', rating: Math.floor(Math.random() * 6) },
        { name: '17.jpg', title: 'Tesla', rating: Math.floor(Math.random() * 6) },
        { name: '16.jpg', title: 'Nike', rating: Math.floor(Math.random() * 6) },
        { name: '15.jpg', title: 'Adidas', rating: Math.floor(Math.random() * 6) },
    ];

    const row4 = [
        { name: '22.jpg', title: 'Apple', rating: Math.floor(Math.random() * 6) },
        { name: '23.jpg', title: 'Samsung', rating: Math.floor(Math.random() * 6) },
        { name: '24.jpg', title: 'Google', rating: Math.floor(Math.random() * 6) },
        { name: '25.jpg', title: 'Amazon', rating: Math.floor(Math.random() * 6) },
        { name: '26.jpg', title: 'Microsoft', rating: Math.floor(Math.random() * 6) },
        { name: '28.jpg', title: 'Coca-Cola', rating: Math.floor(Math.random() * 6) },
        { name: '27.jpg', title: 'McDonald\'s', rating: Math.floor(Math.random() * 6) },
    ];


    return (
        <div id="Home" className=' text-dark bg-light pt-5'>
            <div className='w-100' style={{ maxHeight: '400px' }}>
                <div className='banner overflow-x-auto'>
                    <div className='slider-track py-3'>
                        <div className='slide mx-4 d-flex justify-content-center align-items-center my-0' style={{ minWidth: '400px', height: '180px' }}>
                            <img src={I1} className='' style={{ width: '200px' }} />
                        </div>
                        <div className='slide mx-4 d-flex justify-content-center align-items-center my-0' style={{ minWidth: '400px', height: '180px' }}>
                            <img src={I2} className='' style={{ width: '200px' }} />
                        </div>
                        <div className='slide mx-4 d-flex justify-content-center align-items-center my-0' style={{ minWidth: '400px', height: '180px' }}>
                            <img src={I3} className='' style={{ width: '200px' }} />
                        </div>
                        <div className='slide mx-4 d-flex justify-content-center align-items-center my-0' style={{ minWidth: '400px', height: '180px' }}>
                            <img src={I4} className='' style={{ width: '200px' }} />
                        </div>
                        <div className='slide mx-4 d-flex justify-content-center align-items-center my-0' style={{ minWidth: '400px', height: '180px' }}>
                            <img src={I5} className='' style={{ width: '200px' }} />
                        </div>
                        <div className='slide mx-4 d-flex justify-content-center align-items-center my-0' style={{ minWidth: '400px', height: '180px' }}>
                            <img src={I6} className='' style={{ width: '200px' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="products text-dark p-3">
                <div className=' mt-3 fs-3 fw-bold text-uppercase alert alert-success py-2  ' style={{ borderBottom: "1px solid" }}>Latest Brands</div>
                <div className='p-1 d-flex justify-content-start overflow-auto align-items-center shadow' style={{ borderBottom: "1px solid" }}>
                    {
                        row1.map((image, index) => (
                            <div className='border shadow rounded rounded-3 m-3 text-dark' style={{ minHeight: "400px", maxWidth: "400px" }} key={index}>
                                <Product
                                    id={index + 1}
                                    title={image.title}
                                    image={image.name}
                                    rating={image.rating}
                                    price={70}
                                />
                            </div>))
                    }
                    <div className='more'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" style={{ cursor: 'pointer' }}>
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg></div>
                </div>

                <div className='mt-3 fs-3 fw-bold text-uppercase alert alert-primary py-2 ' style={{ borderBottom: "1px solid" }}>New Comanies In shoe Bussiness</div>
                <div className='p-1 d-flex justify-content-start overflow-auto align-items-center shadow' style={{ borderBottom: "1px solid" }}>
                    {
                        row2.map((image, index) => (
                            <div className='border shadow rounded rounded-3 m-3 text-dark' style={{ minHeight: "400px", maxWidth: "400px" }} key={index}>
                                <Product
                                    id={index + 8}
                                    title={image.title}
                                    image={image.name}
                                    rating={image.rating}
                                    price={70}
                                />
                            </div>))
                    }
                    <div className='more'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" style={{ cursor: 'pointer' }}>
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg></div>
                </div>

                <div className='mt-3 fs-3 fw-bold text-uppercase alert alert-danger py-2 ' style={{ borderBottom: "1px solid" }}>Best for Females</div>
                <div className='p-1 d-flex justify-content-start overflow-auto align-items-center shadow' style={{ borderBottom: "1px solid" }}>
                    {
                        row3.map((image, index) => (
                            <div className='border shadow rounded rounded-3 m-3 text-dark' style={{ minHeight: "400px", maxWidth: "400px" }} key={index}>
                                <Product
                                    id={index + 15}
                                    title={image.title}
                                    image={image.name}
                                    rating={image.rating}
                                    price={70}
                                />
                            </div>))
                    }
                    <div className='more'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" style={{ cursor: 'pointer' }}>
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg></div>
                </div>

                <div className='mt-3 fs-3 fw-bold text-uppercase alert alert-warning py-2 ' style={{ borderBottom: "1px solid" }}>Loffars</div>
                <div className='p-1 d-flex justify-content-start overflow-auto align-items-center shadow' style={{ borderBottom: "1px solid" }}>
                    {
                        row4.map((image, index) => (
                            <div className='border shadow rounded rounded-3 m-3 text-dark' style={{ minHeight: "400px", maxWidth: "400px" }} key={index}>
                                <Product
                                    id={index + 22}
                                    title={image.title}
                                    image={image.name}
                                    rating={image.rating}
                                    price={70}
                                />

                            </div>))
                    }
                    <div className='more'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" style={{ cursor: 'pointer' }}>
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg></div>
                </div>

            </div>
            <div id="Footer" className='text-light bg-dark d-flex align-items-center justify-content-center fixed-bottom' style={{ minHeight: "50px" }}>
                <center>Footer for Every Page</center>
            </div>
        </div>
    )
}

export default Home