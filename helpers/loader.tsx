import {FC} from "react";
import {Triangle} from 'react-loader-spinner'

interface LoaderProps {
    className?: string
}

const Loader:FC<LoaderProps> = ({className}) => {
    return (
        <div className=''>
            <Triangle
                height="90"
                width="90"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                visible={true}
            />

        </div>
    )
}

export default Loader