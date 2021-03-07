import React from 'react'
import Container from '../components/Container'
import Page from '../components/Page'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import 'react-phone-number-input/style.css'
import  PhoneInput  from 'react-phone-number-input'
import isPossiblePhoneNumber from 'react-phone-number-input'
import { useState } from 'react'
import { Button } from '@material-ui/core'
import NextButton from '../components/NextButton'
import { Screen } from "react-screens"
import { useProxy } from 'valtio'
import { page } from '../state'

    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".
    

export default function SignPage() {
    useProxy(page)

    const [value, setValue] = useState()

    return (
        <Screen transitionDirection="leftRight">
            <Page />
            <Container>
                <ArrowBackIosIcon fontSize="large" className="mt-2 ml-2"  onClick={ () => page.value = "welcome"}/>
                <div className="mx-auto text-2xl mt-4">
                    Enter your phone #
                </div>
                <div className="w-10/12 mx-auto mt-8">
                    <PhoneInput
                        placeholder="Phone number"
                        style ={{ 
                            height : '2.5rem' ,
                            fontSize: '1.5rem'
                        }}
                        value={value}
                        onChange={setValue}  
                    /> 
                </div>
                <div onClick={()=>{
                    page.value = "signInVerify"
                
                    }}>
                    <NextButton />
                </div>
                
            </Container>
        </Screen>
    )
}
