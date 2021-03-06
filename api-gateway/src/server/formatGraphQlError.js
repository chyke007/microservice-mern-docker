import _ from "lodash" 

const formatGrapQLErrors = error => {
    const errorDetails = _.get(error, "originalError.response.body");
    try {
        if(errorDetails) return JSON.parse(errorDetails)
    }catch(e){}

    return error;
}

export default formatGrapQLErrors