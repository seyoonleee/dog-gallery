import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ urls }) => {
  console.log('Wrapper Render!!!');

  return (
    <Container>
      <img src={urls[0]} alt="dogImage" />
      <img src={urls[1]} alt="dogImage" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: 1px solid;
  width: 500px;
  height: calc(100% / 5);

  > img {
    width: calc(100% / 2);
    object-fit: cover;
  }
`;

export default Wrapper;
