import React from 'react'
import Container from '../components/Container'
import Page from '../components/Page'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import 'react-phone-number-input/style.css'
import NextButton from '../components/NextButton'
import { Screen } from "react-screens"
import { page } from '../state'
import { useProxy } from 'valtio'



export default function SignInVerifyPage() {
    // const [testCode, settestCode] = useState("")
    useProxy(page)
    return (
        <Screen transitionDirection="leftRight">
            <Page />
            <Container>
                <ArrowBackIosIcon fontSize="large" className="mt-2 ml-2" onClick={() => page.value = "signIn"} />
                <div className="mx-auto text-2xl mt-4">
                    <div className="text-center">Enter the code we<br/> just texted you</div>
                </div>
                <div className="w-10/12 mx-auto mt-8">
                        <>
                            <input className="text-center h-10 w-full text-4xl" placeholder="••••" type="password" maxLength={4} />
                            <div className="opacity-50 text-center mt-4">Didn't receive it? Tap to resend.</div>
                        </>
                </div>
                <div onClick={()=>{
                    // if (testCode !== "") {
                    //     /*发送验证码
                    //     正确到下一页
                    //     错误跳出error modal && setcheckPhone(true)
                    //     */
                    // }
                        page.value = "reserve"
                    }}>
                    <NextButton />
                </div>
                
            </Container>
        </Screen>
    )
}
