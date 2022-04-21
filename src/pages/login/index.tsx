import url from "../../services/spotify";
import { useEffect } from "react";
import { useAppDispatch } from "hook/hook";
import { setToken } from "../../reducer/tokenSlice";
import React from "react";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

const Login = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setToken(getToken() || ""));
    }, [dispatch]);

    const getToken = () => {
        const queryString = new URL(window.location.href.replace("#", "?"))
            .searchParams;
        const accessToken = queryString.get("access_token");
        return accessToken;
    };

    return (
        <>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Music Anywhere <br />
                        <Text as={'span'} color={'green.400'}>
                            Anytime
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        listen to your favorite music with creating your own playlist
                    </Text>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <a
                            href={url}
                        >
                            <Button
                                style={{
                                    backgroundColor: '#12ea43',
                                }}
                                colorScheme={'green'}
                                rounded={'full'}
                                px={6}
                                _hover={{
                                    bg: 'green.500',
                                }}>
                                Login with Spotify
                            </Button>
                        </a>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};


export default Login;
