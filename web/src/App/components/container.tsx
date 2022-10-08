import React from "react";

interface ContainerProps {
    children: React.ReactNode
    hidden: boolean
    id: string
}

const Container: React.FC<ContainerProps> = ({children, hidden, id}) => {
    return (
        <div id={id} className={"container window"} style={{
            display: hidden ? "block" : "none"
        }}>
            {children}
        </div>
    )
}

export default Container