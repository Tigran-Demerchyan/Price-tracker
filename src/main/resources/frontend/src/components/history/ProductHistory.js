
import { Link } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchProductHistoryByIdAsync, selectHistory } from '../../features/productHistory/productHistorySlice';
import styles from './ProductHistory.module.css';

const ProductHistory = () => {

    const history = useSelector(selectHistory);
    let params = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductHistoryByIdAsync(params.id))
    }, []);

    return (
        <div className={styles.backgroundImage}>
            <div className={styles.conatiner}>
                <div className={styles.header}>
                    <p>Price</p>
                    <p>Time</p>
                </div>
                {history.map(e => (
                    <div className={styles.history} key={e.id}>
                        <p>{e.price}</p>
                        <p>{e.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductHistory;
