import { eventContext } from '../context/eventContext'
import { useContext } from 'react'

export const useEventDetailsContext = () => {
    const context = useContext(eventContext)

    if(!context){
        throw Error('useEventDetailsContext must be used inside a EventDetailsContextProcider')
    }
    return context
}