import React from "react";

interface HeadingProps {
    children: string
}

const Heading : React.FC<HeadingProps> = ({children}) => {
    return (
        <nav className="heading container">
            <h1 className="heading text">
                {children}
            </h1>
        </nav>
    )
}

export default Heading