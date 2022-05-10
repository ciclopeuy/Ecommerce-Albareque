import React, { useEffect, useState } from "react";
import { data } from "../../config";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListCat() {
    const [product, setProduct] = useState(null);
    const { categoria } = useParams();

    const eventos = data.filter((evento) => evento.categoria.toLowerCase() === categoria.toLowerCase());

    useEffect(() => {
        getItem();
        return () => { };
    }, [categoria]);

    const getItem = () => {
        const getItemPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(eventos);
            }, 2000);
        });
        getItemPromise.then((res) => setProduct(res));
    };

    return (
        <>

            {product ? (
                <>
                    <h1 className='m-2 display-4 text-warning'><strong>{categoria.toLocaleUpperCase()} </strong>  </h1>
                    <ItemList eventos={product} />
                </>
            ) : (
                <h1 className="text-center">Cargando esto</h1>
            )}
        </>
    );
}

export default ItemListCat;