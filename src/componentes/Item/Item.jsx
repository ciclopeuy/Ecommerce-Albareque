import React, { } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Item = ({ data }) => {

    const { id, fecha, sala, precio, imagen, evento, categoria } = data;

    return (

        <Card className="card m-2 p-1 container-fluid col-md-6 mx-auto d-block" style={{ width: '22rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Link className='text-decoration-none' to={`/categoria/${categoria}`}>
                <Card.Text className=' text-light bg-danger' > {categoria} </Card.Text>
            </Link>
            <Card.Body>
                <Card.Title className='lead text-danger' > <strong> {evento} </strong> </Card.Title>
                <Card.Text >{fecha} en <i>{sala}</i></Card.Text>
                <Card.Text className='lead text-danger' > <i>Entradas desde $ {precio}</i> </Card.Text>
                <Link to={`/ItemDetail/${id}`}><Button className='m-1' variant="outline-danger"> + Detalles </Button></Link>
            </Card.Body>
        </Card >

    )
}

export default Item
