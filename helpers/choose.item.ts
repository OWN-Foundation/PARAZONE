import React from "react";

const chooseItem = (e: React.MouseEvent<HTMLElement> | any, Object: any, props: any, setDropDown: React.Dispatch<React.SetStateAction<boolean>>, type: string) => {
    const div = document.getElementById(type)
    Object.map((arg: any) => {
        const create = `<p className="font-FiraGO text-[14px] w-[310px] md:w-[320px] lg:w-[420px] xl:w-[520px]  h-[44px] flex text-center items-center  cursor-pointer">${arg.name}</p>`
        if (div !== null && e.name === arg.name) {
            div.innerHTML = create
            props.values[type] = e.name
            setDropDown(true)
        }

    })

}

export default chooseItem