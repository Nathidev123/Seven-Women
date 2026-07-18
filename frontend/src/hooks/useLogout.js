import { useAuthContext } from "./useAuthContext";
import { useEventDetailsContext } from "./useEventDetailsContext";


export const useLogout = () => {

    const { dispatch } = useAuthContext()

    const { dispatch: eventsDispatch } = useEventDetailsContext()
    const logout = () => {

        //by changing global state
        //by deleteion in local storgae
        //=> technically logged out
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})

        eventsDispatch({type: 'SET_EventDetails', payload: null})
    }
    return {logout}

}

