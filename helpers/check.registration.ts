import {NextRouter} from "next/router";

export default async function checkRegistration(props: { userContext: { setChecked: (arg0: string) => void; setUserRegistration: (arg0:boolean) => boolean, setLegalUserRegistration: (arg0:boolean) => boolean }, navigate: any, chosen: string, setChosen: (arg0: string) => void }): Promise<void> {

    if (typeof window !== "undefined") {
        if (window.location.pathname == '/registration/userRegistration') {
            props.setChosen('user')
        } else if (window.location.pathname == '/registration/registrationLegalUser') {
            props.setChosen('organization')
        }
    }

    if (props.chosen === 'user') {
        await props.navigate.push('/registration/userRegistration')
        if (window.location.pathname == '/registration/userRegistration') {
            props.userContext.setChecked('user')
        }

    } else if (props.chosen === "organization") {
        await props.navigate.push('/registration/registrationLegalUser')

        if (window.location.pathname == '/registration/registrationLegalUser') {
            props.userContext.setChecked('organization')

        }
    }


}

