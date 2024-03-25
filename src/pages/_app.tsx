
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RootLayout from '../app/layout'
import { NextUIProvider } from "@nextui-org/react";



function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </RootLayout>
    )
}

export default MyApp
