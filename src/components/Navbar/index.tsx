import { useAppDispatch, } from "hook/hook";
import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { removeToken } from "reducer/tokenSlice";

const Navbar = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <Flex alignItems="center" pl={3}>
                <Button
                    backgroundColor="red.500"
                    onClick={() => {
                        dispatch(removeToken());
                    }}
                >
                    Logout
                </Button>
            </Flex>
        </>
    );
}

export default Navbar;