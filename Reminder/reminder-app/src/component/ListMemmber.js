import React from "react";
import {Row,Col} from 'react-bootstrap';

const ListMemmber=({person})=>{
    return(
        <Row className='justify-content-center my-2'>
            <Col sm="8" className="">
                <div className="rectangle p-2 ">
                {person.length ? (person.map((item)=>{
                        return(
                            <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                                <img className="img-avatar" src={item.img} alt="none"/>
                                <div className="px-3">
                                    <p className="d-inline fs-4 color-dark">{item.name}</p>
                                    <p className="fs-6 color-dark">{item.date}</p>
                                </div>
                            </div>
                        )
                    })):<h3 className="p-5 text-center color-dark">لايوجد مواعيد اليوم</h3>
                }
                    
                </div>
            </Col>
        </Row>
    )
}
export default ListMemmber;