
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync, fetchProductByEmailAsync, selectPage, deleteProductAsync, changePage } from '../../features/product/productSlice';

import { Link } from "react-router-dom";
import SwiperSlider from '../swiperSlider';
import { Pagination } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Footer from '../footer/index';
import LogoPm from '../../assets/img/logoPm.png';
import LogoRalphLauren from '../../assets/img/logoRalphLauren.png';
import ZapposLogo from '../../assets/img/zappos.png';
import Hugoboss from '../../assets/img/hugoboss.png';
import styles from './Home.module.css';

import '../../App.css';

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
        <h1 className={styles.title}>TRACK PRICES FOR FREE!</h1>
        <p className={styles.subTitle}>We track prices and availability of products for you! Get the best price and save money by utilizing</p>
        <div className={styles.linkGroups}>
          <a className={styles.link} href='https://www.6pm.com/' target="_blank"><img className={styles.logo} src={LogoPm} /></a>
          <a className={styles.link} href='https://www.zappos.com/' target="_blank"><img className={styles.logo} src={ZapposLogo} /></a>
          <a className={styles.link} href='https://www.hugoboss.com/us/men/' target="_blank"><img className={styles.logo} src={Hugoboss} /></a>
          <a className={styles.link} href='https://www.ralphlauren.com/' target="_blank"><img className={styles.logo} src={LogoRalphLauren} /></a>
        </div>
        <div className={styles.homePage}>
          <input className={styles.inputSearch} type="text" placeholder='Search' onChange={e => setEmail(e.target.value)} />
          <button className={styles.btnSearch} onClick={search}><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
      </div>
      <div className={styles.backgroundColor}>
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
                  <a className={styles.url} href={e.url} target="_blank"><td className={styles.urlTable} data-column="url" >{e.url}</td></a>
                  <td data-column="history"><Link className={styles.link} to={'/history/' + e.id}>history</Link></td>
                  <td data-column="history" className={styles.iconDelete} onClick={() => handDelete(e.id)}><i className="fa fa-trash-o"></i></td>
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
                <h1>TRACK PRICES FOR FREE!</h1>
                <p>We track prices and availability of products for you! Get the best price and save money by utilizing</p>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <div className={styles.backgBlackColor}>
      <Container maxWidth="xl">
        <div className={styles.slider}>
          <SwiperSlider />
        </div>
      </Container>
      </div>
      <Footer />
    </Fragment>
  );
}


export default Home;
