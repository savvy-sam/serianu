export const setErrorMessage = (error)=>{

    let errorMessage = '';

    if(error.response){
        errorMessage = error.response.data
    }
    else if (error.request){
        errorMessage = "Service Unreachable. Try Again Later"
    }
    else {
        errorMessage= error.message
    }

    return errorMessage
}

