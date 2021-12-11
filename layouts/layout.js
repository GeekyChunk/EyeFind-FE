import React, { Children } from 'react'
import Header from '../components/Header'

export default function layout({children}) {
    return (
        <>
            <Header />
            {children}   
        </>
    )
}
