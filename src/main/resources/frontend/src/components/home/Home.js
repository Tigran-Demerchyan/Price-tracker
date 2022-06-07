
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync, fetchProductByEmailAsync, selectProducts } from '../../features/product/productSlice';

import {
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
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

      <input type="text" onChange={e => setEmail(e.target.value)} /> <button onClick={search}>Search </button>


      {products.map(e => (<div key={e.id}> {e.price}  ||| {e.clientEmail} ||| {e.url} |||  <Link to={'/history/' + e.id}>history</Link></div>))}



      <h1> Add new product</h1>

      Link <input type="text" onChange={e => setLink(e.target.value)} />

      email <input type="text" onChange={e => setNewEmail(e.target.value)} />
      price <input type="text" onChange={e => setPrice(e.target.value)} />

      <button onClick={addNewProduct}>Add new</button>

    </Fragment>
  );
}

export default Home;
