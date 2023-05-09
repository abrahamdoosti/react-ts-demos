/* type RandomNumberProps = {
    value: number
    isPositive?: boolean
    isNegative?: boolean
    isZero?: boolean
} */
// instead of the above object create separate types for positive,
// negative and zero so that we can put restrictions only one of them can be used at a time.

//Video: https://www.youtube.com/watch?v=yqn9Fkv7f2M&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=20
type RandomNumberType = {
    value: number
}

// The & means positive number that will contain all types of random number type in addition to isPositive
// if the number isPositive it can never be isNegative or isZero as well.
type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type Zero = RandomNumberType & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero


export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero,
}: RandomNumberProps) => {
    return (
        <div>
            {value}{isPositive && ' positive'}{isNegative && ' negative'}{' '}
            {isZero && ' zero'}
        </div>
    )
}