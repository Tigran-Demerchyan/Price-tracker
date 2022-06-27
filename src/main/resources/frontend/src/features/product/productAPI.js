
import { axClinet } from "../../axiosUtil"

export function fetchProductByEmail(email, pageNumber) {
  return axClinet.get('/products?email=' + email + '&pageNumber='+ pageNumber)
    .then(response => {
      return response.data
    })

}


export function addNewProduct(product){
  return axClinet.post('/products',product )
  .then(response => {
    return response.data
  })
}


export function deleteById(id) {
  return axClinet.delete('/products/' + id)
    .then(response => {
      return response.data
    })
}

