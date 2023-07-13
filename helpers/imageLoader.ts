const imageLoader = ({src}: { src: string }) => {
    const relativeSrc = (src: string) => src.split("/").pop();

    return relativeSrc(src)

}

export default imageLoader