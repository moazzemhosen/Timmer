import { useEffect, useState } from "react"

export const Count = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
     let x=   setInterval(() => {

            setCount((value) => {
                if(value>=8){
                    clearInterval(x)
                    return 10;
                }
                return value + 1;
            });

        }, 1000);
        return ()=>{

            clearInterval(x)
        }

    }, [])




    return <div>

        Count:{count}

    </div>

}