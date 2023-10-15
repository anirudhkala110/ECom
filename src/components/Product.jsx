import React, { useState } from 'react';
import i1 from '../Images/1.jpg'
import i2 from '../Images/2.jpg'
import i3 from '../Images/3.jpg'
import i4 from '../Images/4.jpg'
import i5 from '../Images/5.jpg'
import i6 from '../Images/6.jpg'
import i7 from '../Images/7.jpg'
import i8 from '../Images/8.jpg'
import i9 from '../Images/9.jpg'
import i10 from '../Images/10.jpg'
import i11 from '../Images/11.jpg'
import i12 from '../Images/12.jpg'
import i13 from '../Images/13.jpg'
import i14 from '../Images/14.jpg'
import i15 from '../Images/15.jpg'
import i16 from '../Images/16.jpg'
import i17 from '../Images/17.jpg'
import i18 from '../Images/18.jpg'
import i19 from '../Images/19.jpg'
import i20 from '../Images/20.jpg'
import i21 from '../Images/21.jpg'
import i22 from '../Images/22.jpg'
import i23 from '../Images/23.jpg'
import i24 from '../Images/24.jpg'
import i25 from '../Images/25.jpg'
import i26 from '../Images/26.jpg'
import i27 from '../Images/27.jpg'
import i28 from '../Images/28.jpg'

function Product({ id, title, image, rating, price }) {
    const findImage = [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18,i19,i20,i21,i22,i23,i24,i25,i26,i27,i28]
    const imagePath = findImage[id]
    console.log(id,"  ",imagePath)
    return (
        <div className='d-flex p-3 flex-column bg-light'>
            <h2>{title}</h2>
            <strong>${price}</strong>
            <p>
                {rating !== 0 ? Array(rating).fill().map((_, i) => (
                    <span key={i}>⭐</span>
                )) : <span>⭐⭐</span>}
            </p>
            <div className="d-flex flex-column align-items-center mb-2">
                <img src={imagePath} className='my-1 rounded-3 hovering-img' style={{ height: "200px", minWidth: "200px" }} alt={title} />
                <div className="text-center">
                    <a href="#myModal" className="trigger-btn btn btn-warning my-2" data-toggle="modal">Add Product</a>
                </div>
                <div id="myModal" className="modal fade">
                    <div className="modal-dialog modal-confirm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="icon-box d-flex align-items-center">
                                    <i className=" bi bi-check2-all"></i>
                                </div>
                                <h4 className="modal-title w-100">Awesome!</h4>
                            </div>
                            <div className="modal-body fs-4">
                                <p className="text-center">Your Cart is becoming heavier. . . 😊😉</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
