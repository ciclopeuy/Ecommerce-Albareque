import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
// import { data } from '../../config';

const Item = ({ data }) => {

    const { id, fecha, sala, precio, imagen, evento, stock, categoria } = data;




    return (

        <Card className="card m-3 p-1 container-fluid col-md-6" style={{ width: '25rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Link className='text-decoration-none' to={`/${categoria}`}>
                <Card.Text className=' text-light bg-danger' > {categoria} </Card.Text>
            </Link>
            <Card.Body>
                <Card.Title className='lead text-danger' > <strong> {evento} </strong> </Card.Title>
                <Card.Text >{fecha} en <i>{sala}</i></Card.Text>
                <Card.Text className='lead text-danger' > <i>Entradas desde $ {precio}</i> </Card.Text>
                <ItemCount data={{ stock }} />
                <Link to={`/ItemDetail/${id}`}><Button className='m-1' variant="outline-danger"> + Detalles </Button></Link>
            </Card.Body>
        </Card >

    )
}

export default Item
