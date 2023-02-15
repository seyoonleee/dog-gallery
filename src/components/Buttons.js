import React from 'react';
import styled from 'styled-components';

const Buttons = ({ queryClient }) => {
  return (
    <Wrapper>
      <button
        onClick={() => {
          queryClient.removeQueries('dogImageData');
          console.log('queryClient', queryClient);
        }}
      >
        removeQueries
      </button>
      <button
        onClick={() => {
          queryClient.refetchQueries();
          console.log('queryClient', queryClient);
        }}
      >
        refetchQueries
      </button>
      <button
        onClick={() => {
          queryClient.resetQueries();
          console.log('queryClient', queryClient);
        }}
      >
        resetQueries
      </button>
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
