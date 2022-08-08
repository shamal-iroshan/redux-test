import React from 'react';
import {useSelector} from "react-redux";
import InputForm from '../components/InputForm';
import styled from 'styled-components';
import Card from '../components/Card';
import { selectCards } from '../slice/homeSlice';

const CardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 50px;
    width: 100%;
    padding: 20px;
    gap: 10px;
`;

const Home = () => {
  const cards = useSelector(selectCards)

  return (
    <>
      <InputForm />
      <CardContainer>
        {
          cards && cards.map(card => (
            <Card title={card} />
          ))
        }
      </CardContainer>
    </>
  )
}

export default Home;