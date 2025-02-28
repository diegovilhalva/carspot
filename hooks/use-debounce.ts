import {  useEffect, useState } from "react"
import  debounce  from "lodash.debounce"

const useDebounce = <T>(value:T,delay:number = 300):T => {
    const [debouncedValue,setDebaouncedValue] = useState<T>(value)
    useEffect(() => {
        const  debouncedUpdate = debounce(() => {
            setDebaouncedValue(value)
        },delay) 
        debouncedUpdate()
        return () => {
            debouncedUpdate.cancel()
        }
    },[value,delay])

    return debouncedValue
}

export default useDebounce