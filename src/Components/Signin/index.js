import React from 'react'
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  IconImg,
  Text
} from "./SigninElements";
import logo from '../../Images/TerraNovus_logo_01_REDROSES.png'

const Signin = ({theme}) => {
  console.log(theme.darkHighlight)
  console.log(theme.darkHighlight2)
  return (
    <Container
      highlightBg={theme.darkHighlight}
      highlightBg2={theme.darkHighlight2}
    >
      <FormWrap>
        <Icon to="/" txtcolor={theme.siteText}>
          <IconImg src={logo} />
        </Icon>
        <FormContent>
          <Form action="#" background={theme.siteBg}>
            <FormH1 txtColor={theme.siteText}>Sign in to your account</FormH1>
            <FormLabel htmlFor="for" txtColor={theme.siteText}>
              Email
            </FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for" txtColor={theme.siteText}>
              Password
            </FormLabel>
            <FormInput type="password" required />
            <FormButton
              type="submit"
              background={theme.darkHighlight}
              txtColor={theme.lightHighlight}
            >Continue</FormButton>
            <Text txtColor={theme.siteText}>Forgot Password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default Signin