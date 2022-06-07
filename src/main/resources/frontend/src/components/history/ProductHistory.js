
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchProductHistoryByIdAsync, selectHistory } from '../../features/productHistory/productHistorySlice';


const ProductHistory = () => {

    const history = useSelector(selectHistory);
    let params = useParams();

    console.log("Id isss " + params.id)


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductHistoryByIdAsync(params.id))
    }, []);



    return (
        <Fragment>

            {history.map(e => (<div key={e.id}> {e.price}  ||| {e.time}</div>))}

        </Fragment>
    );
}

export default ProductHistory;
