
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync, fetchProductByEmailAsync, selectProducts } from '../../features/product/productSlice';

import {
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import styles from './Home.module.css';

const Home = () => {

  const products = useSelector(selectProducts);

  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductByEmailAsync(""))
  }, []);


  function search() {
    dispatch(fetchProductByEmailAsync(email))
  }

  const [newEmail, setNewEmail] = useState('');
  const [price, setPrice] = useState(0);
  const [link, setLink] = useState(0);


  function addNewProduct() {
    const p = {
      price: price,
      url: link,
      clientEmail: newEmail
    }
    dispatch(addProductAsync(p))
  }

  return (

    <Fragment>
      <div className={styles.homePage}>
        <input className={styles.inputSearch} type="text" placeholder='Search' onChange={e => setEmail(e.target.value)} />
        <button className={styles.btn} onClick={search}>Search </button>
      </div>

      {products.map(e => (<div key={e.id}> {e.price}  ||| {e.clientEmail} ||| {e.url} |||  <Link to={'/history/' + e.id}>history</Link></div>))}

      <h1 className={styles.title}> Add new product</h1>

      <div >
        <div className={styles.homePageLink}>
          <div>
            <p>Link</p>
            <input className={styles.input} type="text" onChange={e => setLink(e.target.value)} />
          </div>
          <div>
            <p> Email </p>
            <input className={styles.input} type="text" onChange={e => setNewEmail(e.target.value)} />
          </div>
          <div>
            <p> Price</p>
            <input className={styles.input} type="text" onChange={e => setPrice(e.target.value)} />
          </div>
          <div>
            <button className={styles.button} onClick={addNewProduct}>Add new</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
