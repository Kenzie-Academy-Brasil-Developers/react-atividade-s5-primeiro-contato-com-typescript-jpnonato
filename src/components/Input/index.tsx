import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    label: string
}


export const Input = ({label, ...all}: Props) => {

    return(
        <div className='input'>
            <label>{label}</label>
            <input
            placeholder={label} 
            {...all}
            />
        </div>
    )
}