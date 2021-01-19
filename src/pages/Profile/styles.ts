import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    display: flex;
    align-items: center;
    height: 144px;
    background: #28262e;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        height: 24px;
        width: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: -176px auto 0;

  form {
    display: flex;
    flex-direction: column;
    margin: 80px 0;
    width: 340px;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: center;
    }

    a {
      color: #f4ede8;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  align-self: center;
  position: relative;
  margin-bottom: 32px;
  width: 186px;

  img {
    height: 186px;
    width: 186px;
    border-radius: 50%;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 48px;
    width: 48px;
    background: #ff9000;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    input {
      display: none;
    }

    svg {
      height: 20px;
      width: 20px;
      color: #312e28;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
