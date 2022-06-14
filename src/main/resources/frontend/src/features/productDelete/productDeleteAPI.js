import { axClinet } from "../../axiosUtil"

export function fetchProductDeleteById(id) {
  return axClinet.delete('/products/' + id)
    .then(response => {
      return response.data
    })

}

