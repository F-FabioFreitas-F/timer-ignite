import styled, {css} from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'neutral';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariant = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
  neutral: 'white'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${props => {
  return css`background-color: ${buttonVariant[props.variant]}`
  }}
`;