import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react'

export default function Card({ children, w }) {
    return (
        <>
            <Box p={5}  maxW={w}  shadow='md' borderWidth='1px' rounded={10}>
                <Text>
                    {children}
                </Text>
            </Box>
   
        </>
    )
}
