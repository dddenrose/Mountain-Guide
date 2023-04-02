import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 104px;
  .image {
    height: 50%;
    width: 50%;
    margin-right: 32px;
  }
  .left {
    margin: 0 0 0 32px;
  }
`;

export const InfoWrapper = styled.div`
  margin-bottom: 32px;
  h1 {
    margin: 0 0 16px 0;
  }
`

export const Button = styled.div`

    display: inline-block;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  background-color: burlywood;
  color: white;
`;
