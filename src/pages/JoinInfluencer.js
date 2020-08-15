import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Link } from "react-router-dom";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-200`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;


export default () => {
    return (
        <Container>
            <Content>
                <FormContainer>
                    <div tw="mx-auto max-w-4xl">
                        <h2>Become an Influencer</h2>
                        <form action="#">
                            <TwoColumn>
                                <Column>
                                    <InputContainer>
                                        <Label htmlFor="name-input">Your Full Name</Label>
                                        <Input id="name-input" type="text" name="name" placeholder="E.g. John Doe" />
                                    </InputContainer>
                                    <InputContainer>
                                        <Label htmlFor="username-input">Your Username</Label>
                                        <Input id="username-input" type="text" name="username" placeholder="E.g. johndoe" />
                                    </InputContainer>
                                </Column>
                                <Column>
                                    <InputContainer tw="flex-1">
                                        <Label htmlFor="description-input">Your Description</Label>
                                        <TextArea id="description-input" name="message" placeholder="E.g. Details about your specialty" />
                                    </InputContainer>
                                </Column>
                            </TwoColumn>
                            <TwoColumn>
                                <Column>
                                    <InputContainer>
                                        <Label htmlFor="name-input">Your Profile Picture</Label>
                                        <Input id="name-input" type="file" name="profile" placeholder="E.g. John Doe" />
                                    </InputContainer>
                                </Column>
                                <Column>
                                    <InputContainer tw="flex-1">
                                        <Label htmlFor="description-input">Active Location</Label>
                                        <Input id="name-input" type="text" name="name" placeholder="E.g. Indonesia" />
                                    </InputContainer>
                                </Column>
                            </TwoColumn>
                            <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
                        </form>
                    </div>
                </FormContainer>
            </Content>
        </Container>
    );
};
