import React from 'react'
import Item from '../Item/Item'
import { Spinner } from 'react-bootstrap'


const ItemList = ({ eventos }) => {
    return (
        <div className="row d-flex flex-column flex-md-row mx-auto col-md-10">

            {eventos.length > 0 ? (
                eventos.map((evento) => <Item
                    data={evento}
                />)
            ) : (
                <div className="justify-content-center">
                    <Spinner animation="grow" role="status" variant="warning">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
        </div >
    );
};

export default ItemList;
