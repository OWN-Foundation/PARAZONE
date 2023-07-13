import {useEffect} from "react";

export function useOnHoverOutside(ref: any, handler: [] | any) {
    useEffect(
        () => {
            const listener = (event: any) => {
                for (let i = 0; i < handler.length; i++) {
                    if (!ref[i].current || ref[i].current.contains(event.target)) {
                        return;
                    }
                    handler[i](event);
                }

            };
            document.addEventListener("mouseover", listener);
            return () => {
                document.removeEventListener("mouseout", listener);
            };
        },
        [ref, handler]
    );
}