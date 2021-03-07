import React from 'react'
import Container from '../components/Container'
import Page from '../components/Page'
import { Screen } from "react-screens"
import { page } from '../state'
import { useProxy } from 'valtio'

export default function WelcomePage() {
    useProxy(page)
    return (
        <Screen transitionDirection="leftRight">
            <Page />
            <Container>
                <div className="px-4 pt-20 pb-8">
                    <div className="text-2xl">🎉 Welcome!</div>
                    <div className="mt-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, provident ducimus. Laboriosam placeat quibusdam minus! Officiis alias porro magnam ullam reprehenderit voluptas dolorum non laboriosam neque, consequatur ad modi sunt.
                    </div>
                    <div className="mt-8">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eos et odio eligendi nemo facilis, obcaecati delectus, illum doloremque, fugiat nobis in consectetur iure impedit! Magnam totam corrupti impedit ea.
                    </div>
                    <div className="mx-auto mt-16">
                        <div className="px-4 py-2 bg-blue-700 text-white text-center rounded-3xl" onClick={() => page.value = "signIn" }>Get your username →</div>
                        <div className="mt-4 text-blue-700 text-center">Have an invite text? Sign in →</div>
                    </div>
                </div>
            </Container>
        </Screen>
    )
}
