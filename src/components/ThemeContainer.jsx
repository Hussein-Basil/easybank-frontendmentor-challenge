import React from 'react'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
    components: {
        Button: {
            variants: {
                vibrant: {
                    backgroundImage: "linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))", 
                    color: "white",
                    borderRadius: "20px",
                    width: "fit-content",
                    paddingX: "2em",
                    fontSize: "1em",

                    _hover: {
                        backgroundImage: "linear-gradient(to right, hsla(136, 65%, 51%, 50%), hsla(192, 70%, 51%, 50%))"
                    }
                }
            }
        }
    }

})

const ThemeContainer = ({ children }) => {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default ThemeContainer