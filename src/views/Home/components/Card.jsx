import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 250px;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
`;

const CustomText = styled.p`
    font-size: 20px
`;

const Card = ({title}) => {
    return (
        <CardContainer>
            <CustomText>{title}</CustomText>
        </CardContainer>
    );
}

export default Card;