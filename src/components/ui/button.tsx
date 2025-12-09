 "use client";
import { login } from '@/store/slices/userSlice'
import {useDispatch} from 'react-redux'

export default function Button( ){
    const dispatch = useDispatch()
    return(
<button onClick={() =>dispatch(login({name:"mike adenuga"}))}></button>
    )
}