type GreetProps = {
    name: string
    //add ? at the end of a property to show that it is optional
    messageCount?: number
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
    //The following is when you want to set messageCount to 0 when it is not provided.
    const { messageCount = 0 } = props
    return (
        <div>
            <h2>
                {props.isLoggedIn ? `Welcome ${props.name}! You have ${messageCount} unread messages` : 'Welcome Guest'
                }

            </h2>
        </div>
    )
}
