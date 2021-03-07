import React from 'react'
import { Screen } from 'react-screens'
import { useProxy } from 'valtio'
import Container from '../components/Container'
import Page from '../components/Page'
import { page } from '../state'
export default function ReservePage(props) {
    useProxy(page)
    return (
        <Screen>
            <Page />
            <Container>
                <div className="mt-40 text-2xl text-center">
                🎉 We'have reserved<br /> <span className="font-bold">{props.name}</span> for you, and we'll<br /> text you as soon as your <br />account is ready!
                </div>
                <div className="mt-6 text-center">
                    To learn more about Unionhall you can <br />read our <span className="text-blue-700 font-semibold">blog post</span>. Thank you! 🙏
                </div>
                <div className="mt-12 text-center text-blue-700">
                    Got your invite text? <span className="font-semibold">Sign in →</span>
                </div>
            </Container>
        </Screen>
    )
}
