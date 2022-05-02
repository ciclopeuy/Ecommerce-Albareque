import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ data }) => {

    const { descripcion, precio, imagen, evento, } = data;

    return (

        <Card className="m-3" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title className='display-6 text-danger' >{evento}</Card.Title>
                <Card.Text className='lead'>
                    {descripcion}
                </Card.Text>
                <Card.Text className='lead text-danger' > <i>Precio en $ {precio}</i> </Card.Text>
                <ItemCount data={{ stock: data.stock }} />
            </Card.Body>
        </Card>

    )
}

export default Item
