import React from 'react'
import Item from '../Item/Item'
import { Spinner } from 'react-bootstrap'


const ItemList = ({ eventos }) => {
    return (
        <div className="row d-flex flex-column flex-md-row justify-content-center col-md-12">

            {eventos.length > 0 ? (
                eventos.map((evento) => <Item
                    data={evento}
                />)
            ) : (
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </div >
    );
};

export default ItemList;