import newRequest from '../utils/newRequest'
import { setErrorMessage} from '../utils/globalMethods'

export const updateData = async(method, url, dataToSend, dispatch,)=>{

    const config = {method: method, url: url, data: dataToSend, };

    dispatch({type: 'OPEN_LOADING'})

    try {
        const res = await newRequest(config)
        const data = res.data
        dispatch({type: 'CLOSE_LOADING'})
        dispatch({type: 'UPDATE_ALERT', payload: {open: true, variant: 'success', duration: 5000, message: data}})
    } catch (error) {
        dispatch({type: 'CLOSE_LOADING'})
        dispatch({
            type: 'UPDATE_ALERT',
            payload: {open: true, variant: 'danger', message: setErrorMessage(error), duration: 5000}
        })
    }

}