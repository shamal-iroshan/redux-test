import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { homeActions } from '../slice/homeSlice';

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 100%;
    padding-bottom: 50px;
    border-bottom: 1px solid #000
`;

const CustomInput = styled.input`
  width: 300px;
  height: 30px;
  margin-right: 50px;
`;

const CustomButton = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 50px;
`;

const InputForm = () => {
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        dispatch(homeActions.addCard(title));
        event.target.title.value = '';
    }

    return (
        <InputContainer>
            <form onSubmit={onSubmit}>
                <CustomInput type="text" name="title" />
                <CustomButton type="submit">Submit</CustomButton>
            </form>
        </InputContainer>
    );
}

export default InputForm;