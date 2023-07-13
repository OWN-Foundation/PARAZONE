export const setCookie = (cname:string, cvalue:string, exdays:number) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


export const getCookie = (cname:string) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const deleteCookie = (name:string) => {
    if(getCookie(name)) {
        document.cookie = name+'=; Max-Age=-99999999;';
    }
}

export const getUserId = () => {
    // get user partners from token which might be inside cookies
    const token = getCookie("accessToken")

    if(!token || token===undefined) return null

    const base64Url = token.split('.')[1]
    const base64 = base64Url?.replace('-', '+')?.replace('_', '/')
    const parsedData = JSON.parse(window.atob(base64))
    // console.log(parsedData)
    return parsedData.sub
}