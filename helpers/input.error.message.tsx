import checkYupInputs from "./check.yup";
import React from "react";

const InputErrorMessage = (props: any, type: string) => {
    return (
        checkYupInputs(props, type) ? (
            <div className="text-error text-[13px] font-firago">{props.errors[type]}</div>
        ) : null
    )
}

export default InputErrorMessage