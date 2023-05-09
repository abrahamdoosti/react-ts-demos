//video: https://www.youtube.com/watch?v=4Ml7Lp_QcSo&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=8
import { Name } from "./person.types"
type PersonListProps = {
    names: Name[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map((name) => {
                return (
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}