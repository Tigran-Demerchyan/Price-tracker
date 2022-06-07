
import { axClinet } from "../../axiosUtil"

export function fetchProductByEmail(email) {
  return axClinet.get('/products?email=' + email)
    .then(response => {
      return response.data
    })

}


export function addNewProduct(product){
  return axClinet.post('/products/create',product )
  .then(response => {
    return response.data
  })
}