const checkYupInputs = (props: any, type: string) => {
    return !!props.errors[type] && !!props.touched[type]
}

export default checkYupInputs