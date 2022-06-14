
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync, fetchProductByEmailAsync, selectProducts , deleteProductAsync} from '../../features/product/productSlice';


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

  function handDelete(id) {
    
    dispatch(deleteProductAsync(id))
  }

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
    
      <div className={styles.banner}>
        <h1 className={styles.title}>TRACK 6PM PRICES FOR FREE!</h1>
        <p className={styles.subTitle}>We track prices and availability of 6pm products for you! Get the best price and save money by utilizing 6pm.net.</p>
        <div className={styles.homePage}>
          <input className={styles.inputSearch} type="text" placeholder='Search' onChange={e => setEmail(e.target.value)} />
          <button className={styles.btn} onClick={search}><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Email</th>
            <th>Link</th>
            <th>History</th>
            <th>Delete</th>
          </tr>
        </thead>
        {products.map(e => (
          <tbody key={e.id}>
            <tr>
              <td data-column="price" className={styles.price}>{e.price}</td>
              <td data-column="clientEmail">{e.clientEmail}</td>
              <td data-column="url">{e.url}</td>
              <td data-column="history"><Link className={styles.link} to={'/history/' + e.id}>history</Link></td>
              <td data-column="history"><button onClick={() => handDelete(e.id)} className={styles.btnDelete}>Delete</button></td>
            </tr>
          </tbody>
        ))}
      </table>

      <div>
        <div className={styles.homePageLink}>
          <div className={styles.block}>
            <p className={styles.homePageTitle}>Title</p>
          </div>
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
     <div className={styles.boxImages}>
     <div>
        <img className={styles.img} src="https://m.media-amazon.com/images/G/01/6pm/landing/HP-Sandals._CB667991280_.jpg" />
        <p>Sandals on Sale</p>
      </div>
      <div>
        <img className={styles.img} src="https://m.media-amazon.com/images/G/01/6pm/landing/HP-Sneakers.jpg" />
        <p>Sandals on Sale</p>
      </div>
      <div>
        <img className={styles.img} src="https://m.media-amazon.com/images/G/01/6pm/landing/pages/homepage-refresh/clearance-closet.png" />
        <p>All your favorite brands and styles, starting at 70% off MSRP!</p>
      </div>
     </div>
    </Fragment>
  );
}

export default Home;
