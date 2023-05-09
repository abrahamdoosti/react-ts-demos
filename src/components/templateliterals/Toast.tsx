/**
 * Position prop can be one of "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */
//Video: https://www.youtube.com/watch?v=jrnIh0RPeCw&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=21
type PositionProps = {
    position: string
}

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}
export const Toast = ({ position }: ToastProps) => {
    return <div>Toast Notification Position -{position}</div>
}