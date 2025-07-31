import React from 'react';
import ItemPelicula from './ItemPelicula';

const ListaPeliculas = ({peliculas}) => {
    return (
        <div className='row mt-4'>
            {
            peliculas.map((item, indice)=>(
                <div className="col-md-4 mb-4 mx-5">
                    <ItemPelicula key={indice} pelicula={item}></ItemPelicula>
                </div>
            ))   
            }            
        </div>
    );
};

export default ListaPeliculas;