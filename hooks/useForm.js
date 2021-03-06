import { useState } from 'react'

export const useForm = (initialState = {} ) => {

    const [value, setvalue] = useState(initialState)

    const reset = () => {
        setvalue( initialState );
    }

    const handleInputChange = ({ target }) => {
        setvalue({
            ...value,
            [target.name]: target.value
        })
    }

    return [value, handleInputChange, reset];


}
