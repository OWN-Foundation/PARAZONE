import React, {createContext, useContext, useState} from "react"
import {UsersInterface} from "../interfaces/user.interface";

const GlobalContext = createContext<any>({
    user: false,
    setUser: () => {
    },
    isVerified: false,
    setVerified: () => {
    },
})

export const GlobalProvider = (
    {children}: { children: React.ReactNode | any }
) => {
    const [user, setUser] = useState<UsersInterface | null>(null)
    const [isVerified, setVerified] = useState<boolean>(false)
    const [isChecked, setChecked] = useState<string>("user")
    const [isShow, setShow] = useState<string>("review")
    const [isClick, setClick] = useState<boolean>(false)
    const [isUserRegistration, setUserRegistration] = useState<boolean>(false)
    const [isLegalUserRegistration, setLegalUserRegistration] = useState<boolean>(false)
    const [isDeletedBranch, setDeletedBranch] = useState<boolean>(false)
    const [isCreateBranch, setCreateBranch] = useState<boolean>(false)
    const [enabledToggle, setEnabledToggle] = useState<boolean>(true)
    const [addOffer, setAddOffer] = useState<boolean>(false)
    const [deleteOffer, setDeleteOffer] = useState<boolean>(false)
    const [isProfile, setProfile] = useState<boolean>(true)
    const [isHistory, setHistory] = useState<boolean>(false)
    // offers page
    const [listOfUsers, setListOfUsers] = useState<boolean>(false)
    const [isOffers, setOffers] = useState<boolean>(true)

    // staff page
    const [listOfStaff, setListOfStaff] = useState<boolean>(true)
    const [listOfPositions, setListOfPosition] = useState<boolean>(false)

    // for staff page
    const [isDeletedStaff, setDeletedStaff] = useState<boolean>(false)
    const [isCreatedStaff, setCreatedStaff] = useState<boolean>(false)
    const [isCreatedPosition, setCreatedPosition] = useState<boolean>(false)
    const [isDeletedPosition, setDeletedPosition] = useState<boolean>(false)

    return (
        <GlobalContext.Provider value={{
            user,
            setUser,
            enabledToggle,
            setEnabledToggle,
            isVerified,
            setVerified,
            isChecked,
            setChecked,
            isShow,
            setShow,
            isUserRegistration,
            setUserRegistration,
            isLegalUserRegistration,
            setLegalUserRegistration,
            isClick,
            setClick,
            isDeletedBranch,
            setDeletedBranch,
            isCreateBranch,
            setCreateBranch,
            isDeletedStaff,
            setDeletedStaff,
            isCreatedStaff,
            setCreatedStaff,
            addOffer,
            setAddOffer,
            deleteOffer,
            setDeleteOffer,
            isProfile,
            setProfile,
            isHistory,
            setHistory,
            isOffers,
            setOffers,
            listOfUsers,
            setListOfUsers,
            listOfStaff,
            setListOfStaff,
            listOfPositions,
            setListOfPosition,
            isCreatedPosition,
            setCreatedPosition,
            isDeletedPosition,
            setDeletedPosition

        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(GlobalContext)
}