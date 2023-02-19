import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

const Buttons = ({ isFetching, setIsFetching }) => {
  // client에 접근하기
  const queryClient = useQueryClient();

  return (
    <Wrapper>
      <button
        onClick={() => {
          queryClient.removeQueries('dogImageData');
          console.log(queryClient);
        }}
      >
        removeQueries
      </button>
      <button
        onClick={() => {
          queryClient.refetchQueries();
          console.log(queryClient);
        }}
      >
        refetchQueries
      </button>
      <button
        onClick={() => {
          queryClient.resetQueries();
          console.log(queryClient);
        }}
      >
        resetQueries
      </button>
      <button onClick={() => setIsFetching(!isFetching)}>state 변경</button>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default Buttons;
