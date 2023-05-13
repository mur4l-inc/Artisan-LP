import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  $primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background: red;

  ${props => props.$primary && css`
    background: green;
  `}
`;
{/* <Button $primary>Primary Button</Button> */}

const Nav: React.FC = () => {
  return (
    <div>
      <Button>Primary Button</Button>
      <nav>
        <ul>
          <li>
            <a href="#">Menu1</a>
          </li>
          <li>
            <a href="#">Menu2</a>
          </li>
          <li>
            <a href="#">Menu3</a>
          </li>
          <li>
            <a href="#">Menu4</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
