import React, {FC} from "react";
import classNames from "../../../../helpers/classNames";
import Image from "next/image";
import styles from './button.module.scss'


type ButtonProps = {
    icon?: any;
    name?: string;
    imageClassname?: string
    classNameButton?: string;
    classNameForName?: string
    defaultStyleForButton?: boolean,
    defaultStyleForName?: boolean,
    ref?: React.MutableRefObject<null>,
    onClick?: any;
    disabled?: any
};

const defaultStyles: string = styles.default_styles
const defaultStyleForNames: string = styles.default_styles_name
const Button: FC<ButtonProps> = ({
                                     icon,
                                     name,
                                     classNameButton,
                                     imageClassname,
                                     classNameForName,
                                     defaultStyleForButton = true,
                                     defaultStyleForName = true,
                                     ref,
                                     onClick,
                                     disabled
                                 }) => {
    return (

        <div className={'group'}>
            <button ref={ref} onClick={onClick} disabled={disabled}
                    className={defaultStyleForButton ? (classNameButton ? classNames(defaultStyles, classNameButton) : classNames(defaultStyles)) : (classNameButton ? classNames(classNameButton) : classNames(defaultStyles))}
            >
                <p className={defaultStyleForName ? (classNameForName ? classNames(defaultStyleForNames, classNameForName) : classNames(defaultStyleForNames)) : (classNameForName ? classNames(classNameForName) : classNames(defaultStyleForNames))}>{name}</p>
                <div className='searchIcon'>
                    {
                        icon ? <Image
                            src={icon}
                            alt="Picture of the author"
                            className={imageClassname ? imageClassname : ''}
                        /> : null
                    }

                </div>
            </button>

        </div>

    )
}

export default Button