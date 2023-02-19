import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ urls }) => {
  const [dogImage1, dogImage2] = urls;

  return (
    <Container>
      <img src={dogImage1} alt="dogImage" />
      <img src={dogImage2} alt="dogImage" />
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
