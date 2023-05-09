//video: https://www.youtube.com/watch?v=4Ml7Lp_QcSo&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=8
import { PersonProps } from "./person.types"

export const Person=(props: PersonProps)=>{
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}