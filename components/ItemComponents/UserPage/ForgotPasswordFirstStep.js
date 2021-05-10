import React, { Component } from "react";
import { LightSpan, ModalPadding } from "../../mainComponents";
import Input from "../../Inputs/Input";
import {
    ModalLinksFooter,
    ModalPageStyled,
    ModalTitle,
    WideButton
} from "./_components";

class ForgotPasswordFirstStep extends Component {
    render() {
        const Agree = (
            <>
                I agree to BBOD’s <a href="">Terms of Use</a>
            </>
        );

        return (
            <ModalPageStyled>
                <ModalPadding>
                    <ModalTitle>Reset Password</ModalTitle>
                    <Input title="Address Email" />
                    <WideButton>Send</WideButton>
                </ModalPadding>
            </ModalPageStyled>
        );
    }
}

export default ForgotPasswordFirstStep;
