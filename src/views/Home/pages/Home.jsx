import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import InputForm from '../components/InputForm';
import styled from 'styled-components';
import Card from '../components/Card';
import { selectCards } from '../slice/homeSlice';
import { homeActions } from '../slice/homeSlice';
import { onSnapshot } from 'firebase/firestore';
import {doc} from '../../../config/firebase';

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
  const cards = useSelector(selectCards);
  const dispatch = useDispatch();

  useEffect(() => {
    let newCards = [];
    onSnapshot(doc, (snapshot) => {
      newCards = [];
      snapshot.docs.forEach(doc => {
        newCards.push(doc.data());
      });
      dispatch(homeActions.saveCards(newCards));
    });
  }, [dispatch]);

  return (
    <>
      <InputForm />
      <CardContainer>
        {
          cards && cards.map((card, index) => (
            <Card key={`card-${index}`} title={card.title} />
          ))
        }
      </CardContainer>
    </>
  )
}

export default Home;