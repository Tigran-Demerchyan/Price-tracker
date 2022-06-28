

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { fetchProductHistoryByIdAsync, selectHistoryPage } from '../../features/productHistory/productHistorySlice';
import styles from './ProductHistory.module.css';

const ProductHistory = () => {

    const history = useSelector(selectHistoryPage).items;
    let params = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductHistoryByIdAsync(params.id))
    }, []);


    return (
        <div className={styles.backgroundImage}>
            <div className={styles.conatiner}>
               {history.length < 0 && <div className={styles.header}>
                    <p>Price</p>
                    <p>Time</p>
                </div>}
                {history.map(e => (
                    <div className={styles.history} key={e.id}>
                        <p>{e.price}</p>
                        <p>{e.time}</p>
                    </div>
                ))}
                <Link className={styles.link} to="/">
                    <button className={styles.btn}> Go home</button>
                </Link>
            </div>

        </div>
    );
}

export default ProductHistory;
