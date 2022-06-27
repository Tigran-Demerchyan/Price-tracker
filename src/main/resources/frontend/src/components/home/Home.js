
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync, fetchProductByEmailAsync, selectPage, deleteProductAsync, changePage } from '../../features/product/productSlice';

import { Link } from "react-router-dom";
import styles from './Home.module.css';
import SwiperSlider from '../swiperSlider';
import { Pagination } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Footer from '../footer/index';

const Home = () => {

  const [newEmail, setNewEmail] = useState('');
  const [price, setPrice] = useState(0);
  const [link, setLink] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  const pageOfProd = useSelector(selectPage);
  const products = pageOfProd.items;
  const curPageNumber = pageOfProd.pageCount;
  const totalCount = pageOfProd.totalCount;

  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductByEmailAsync({ email: "", pageNumber: 0 }))
  }, []);

  function handDelete(id) {
    dispatch(deleteProductAsync(id))
  }

  function search() {
    dispatch(fetchProductByEmailAsync({ email: email, pageNumber: pageNumber }))
  }

  function addNewProduct() {
    const p = {
      price: price,
      url: link,
      clientEmail: newEmail
    }
    dispatch(addProductAsync(p))
  }

  function handleChange(event, value) {
    const pn = value - 1;
    setPageNumber(pn);
    dispatch(fetchProductByEmailAsync({ email: email, pageNumber: pn }))
  }

  return (

    <Fragment>
      <div className={styles.banner}>
        <h1 className={styles.title}>TRACK 6PM ZAPPOS HUGO BOSS PRICES FOR FREE!</h1>
        <p className={styles.subTitle}>We track prices and availability of 6pm, Zappos, Hugo Boss products for you! Get the best price and save money by utilizing
          <a className={styles.link} href='https://www.6pm.com/' target="_blank">6pm.com</a>
          <a className={styles.link} href='https://www.zappos.com/' target="_blank">Zappos.com</a>
          <a className={styles.link} href='https://www.hugoboss.com/us/men/' target="_blank">Hugo Boss.com</a>
        </p>
        <div className={styles.homePage}>
          <input className={styles.inputSearch} type="text" placeholder='Search' onChange={e => setEmail(e.target.value)} />
          <button className={styles.btnSearch} onClick={search}><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
      </div>
      <Container maxWidth="xl">
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
                <a className={styles.link} href={e.url} target="_blank" ><td data-column="url" >{e.url}</td></a>
                <td data-column="history"><Link className={styles.link} to={'/history/' + e.id}>history</Link></td>
                <td data-column="history"><button onClick={() => handDelete(e.id)} className={styles.btnDelete}>Delete</button></td>
              </tr>
            </tbody>
          ))}
        </table>

        <div>
          <p className={styles.elements}>all elements {pageOfProd.totalElements}</p>
          <Pagination color="primary" count={pageOfProd.totalPages} rowsPerPage={10} onChange={handleChange} />
        </div>

        <div className={styles.homePageConatiner}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <div className={styles.blockItem}>
                <p className={styles.InputTable}>Link</p>
                <input className={styles.input} type="text" onChange={e => setLink(e.target.value)} />
              </div>
              <div className={styles.blockItem}>
                <p className={styles.InputTable}> Email </p>
                <input className={styles.input} type="text" onChange={e => setNewEmail(e.target.value)} />
              </div>
              <div className={styles.blockItem}>
                <p className={styles.InputTable}> Price</p>
                <input className={styles.input} type="text" onChange={e => setPrice(e.target.value)} />
              </div>
              <button className={styles.button} onClick={addNewProduct}>Add new</button>
            </Grid>
            <Grid item xs={12} lg={6}>
              <h1>TRACK 6PM ZAPPOS HUGO BOSS PRICES FOR FREE!</h1>
              <p>We track prices and availability of 6pm, Zappos, Hugo Boss products for you! Get the best price and save money by utilizing</p>
              <button className={styles.btn}>add</button>
            </Grid>
          </Grid>
        </div>
        <div className={styles.slider}>
          <SwiperSlider />
        </div>
      </Container>
     <Footer/>
    </Fragment>
  );
}


export default Home;
