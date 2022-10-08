import React from "react";

interface SelectRowProps {
    children: string
}

const SelectRow: React.FC<SelectRowProps> = ({children}) => {
    return (
        <div>
            <select onChange={ (e) => {
                const decode = document.getElementById("decode") as HTMLElement
                const encode = document.getElementById("encode") as HTMLElement
                if (e.target.value == "decode") {
                    decode.style.display = "block"
                    encode.style.display = "none"
                } else if (e.target.value == "encode") {
                    encode.style.display = "block"
                    decode.style.display = "none"
                }
            } }>
                <option value={"decode"}>Decode</option>
                <option value={"encode"}>Encode</option>
            </select>
        </div>
    )
}

export default SelectRow