import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {AppBar, useScrollTrigger} from "@mui/material";
import {Box} from "@mui/system";

export default function App({Component, pageProps}: AppProps) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return (
        <>
            <AppBar position={trigger ? "fixed" : "absolute"} color={trigger ? "default" : "transparent"}
                    elevation={0}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "70px",
                        p: 0
                    }}
                    className={"navbarAll"}>
                <Box sx={{height: "200px", bgcolor: "red"}}></Box>
            </AppBar>

            <Component {...pageProps} />
        </>
    );
}
