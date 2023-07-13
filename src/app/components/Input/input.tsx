import React, {DetailedHTMLProps, FC, InputHTMLAttributes, LegacyRef} from "react";
import classNames from "../../../../helpers/classNames";
import styles from './input.module.scss'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    id?: any
    name: string,
    type?: "text" | "number" | "email" | "password" | "tel" | "url" | "date" | "checkbox" | "radio" | 'file',
    placeholder?: string,
    className?: string
    value?: string
    disabled?: boolean
    defaultStyle?: boolean
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onClick?: React.MouseEventHandler<HTMLInputElement>
    ref?: LegacyRef<HTMLInputElement>
}

const defaultStyles: string = styles.default_styles


const Input: FC<InputProps> = ({type = "text", name, value, onChange, onClick, placeholder, className, disabled, defaultStyle = true, id, ref}) => {
    return (
        <input
            id={id}
            ref={ref}
            type={type}
            name={name}
            value={value}
            className={defaultStyle ? (className ? classNames(defaultStyles, className) : classNames(defaultStyles)) : (className ? classNames(className) : classNames(defaultStyles))}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            onClick={onClick}
        />
    )
}


export default Input
