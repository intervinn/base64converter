import React from "react";
import { Container, Heading, SelectRow } from "./components";

import "./styles/globals.css"

const App: React.FC<{}> = ({}) => {
    return (
        <>
        <main>
            <Heading>BASE64 - Encode/Decode</Heading>

            <SelectRow>hi</SelectRow>

            <Container id={"encode"} hidden={false}>
                <div>
                    <h2>Encode</h2>

                    <textarea rows={20} name={"encode"} id={"encode area"}></textarea>

                    <button onClick={ async (e) => {
                        const encodeElement = document.getElementById("encode area") as HTMLTextAreaElement
                        const encodeOutput = document.getElementById("encode output") as HTMLTextAreaElement

                        const value = encodeElement.value
                        const request = await fetch("/encode", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(value),
                        })

                        const response = await request.json()

                        encodeOutput.value = response["message"]
                    }}>
                        Encode
                    </button>

                    <textarea rows={20} id={"encode output"}></textarea>

                </div>
            </Container>

            <Container id={"decode"} hidden={true}>
                <div>
                    <h2>Decode</h2>

                    <textarea id={"decode area"} name={"decode"} rows={20}></textarea>

                    <button onClick={ async (e) => {

                        const decodeElement = document.getElementById("decode area") as HTMLTextAreaElement
                        const decodeOutput = document.getElementById("decode output") as HTMLTextAreaElement

                        const value = decodeElement.value

                        console.log(value)

                        const request = await fetch("/decode", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(value)
                        })

                        const response = await request.json()
                        decodeOutput.value = response["message"]

                    } } >Decode</button>

                    <textarea id={"decode output"}></textarea>

                </div>
            </Container>

        </main>
        </>
    )
}

export default App