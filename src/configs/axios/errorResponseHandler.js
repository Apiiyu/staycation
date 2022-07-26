import { toast } from "react-toastify"

const errorResponseHandler = (error) => {
  if (error) {
    let message

    if (error.response) {
      if (error.response.status === 500) message = 'Something Went Wrong!'
      else message = error.response.message

      toast.error(message)
 
      return Promise.reject(error)
    }
  }
}

export default errorResponseHandler