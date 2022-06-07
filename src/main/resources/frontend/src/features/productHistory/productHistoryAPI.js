
import { axClinet } from "../../axiosUtil"

export function fetchProductHistoryById(id) {
  return axClinet.get('/history/' + id)
    .then(response => {
      return response.data
    })

}

