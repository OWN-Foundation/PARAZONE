const generateUuid = (length: number) => {
    let hash = '';
    const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++)
        hash += possible.charAt(Math.floor(Math.random() * possible.length));

    return hash;
}

export default generateUuid