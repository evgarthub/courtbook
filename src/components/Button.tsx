import { styled } from 'styled-components';

export const Button = styled.button`
    background-color: #421a1a;
    padding: 5px 10px;
    border-radius: 8px;
    border: none;
    color: white;
    font-weight: bold;
    transition: background-color ease 0.3s;

    &:hover {
        background-color: #5e4747;
    }
`;
