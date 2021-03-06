import styled from 'styled-components';
import { shade } from 'polished';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div<CardProps>`
  background: ${props =>
    props.total ? '#FF872C' : props.theme.colors.background};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${props => (props.total ? '#fff' : props.theme.colors.text)};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const Transaction = styled.tr`
  td {
    padding: 20px 32px;
    border: 0;
    background: ${props => props.theme.colors.container};
    font-size: 16px;
    font-weight: normal;
    color: #969cb3;

    &.title {
      color: ${props => props.theme.colors.text};
    }

    &.income {
      color: #12a454;
    }

    &.outcome {
      color: #e83f5b;
    }

    button {
      background: #e83f5b;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      border-radius: 5px;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, '#e83f5b')};
      }

      svg {
        color: #fff;
      }
    }

    &:first-child {
      border-radius: 8px 0 0 8px;
    }

    &:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
