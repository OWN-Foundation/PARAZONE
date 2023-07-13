import {FC} from "react";
import Image from "next/image";
import errorAlert from "../public/images/error-alert.svg"

interface ErrorMessageProps {
    className?: string
    classNameForImageAndMessageContainer?: string
    classNameForErrorMessage?: string
    errorMessage: string
}

const ErrorMessages: FC<ErrorMessageProps> = ({errorMessage, className, classNameForImageAndMessageContainer, classNameForErrorMessage}) => {
    return (
        <div className={className}>

            <div className={classNameForImageAndMessageContainer}>

                <Image src={errorAlert} alt={"error-logo"}/>

                <span className={classNameForErrorMessage}>
                {errorMessage}
               </span>

            </div>


        </div>
    )
}

export default ErrorMessages