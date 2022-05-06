import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
// import { data } from '../../config';

const Item = ({ data }) => {

    const { id, fecha, sala, precio, imagen, evento, stock } = data;




    return (

        <Card className="m-3" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title className='display-6 text-danger' >{evento}</Card.Title>
                <Card.Text className='lead'>{fecha} en <i>{sala}</i></Card.Text>
                <Card.Text className='lead text-danger' > <i>Entradas desde $ {precio}</i> </Card.Text>
                <ItemCount data={{ stock }} />
                <Link to={`/ItemDetail/${id}`}><Button className='m-1' variant="dark"> + Detalles </Button></Link>
                {/* <link to={`/ItemDetail/${id}`}>+ detalles</link> */}
            </Card.Body>

        </Card >

    )
}

export default Item
