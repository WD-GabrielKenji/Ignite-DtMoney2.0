import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  min-width: 32rem;
  top: 50%;
  left: 50%;
  padding: 2.5rem 3rem;
  border-radius: 6px;
  background: ${props => props.theme["gray-800"]};
  transform: translate(-50%, -50%);
  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;
    input {
      padding: 1rem;
      border: 0;
      border-radius: 6px;
      background: ${props => props.theme["gray-900"]};
      color: ${props => props.theme["gray-300"]};
      &::placeholder {
        color: ${props => props.theme["gray-500"]};
      }
    }
    button[type="submit"] {
      height: 50px;
      margin-top: 1.25rem;
      padding: 0 1.25rem;
      border: 0;
      border-radius: 6px;
      background: ${props => props.theme["green-500"]};
      color: ${props => props.theme.white};
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0.5rem;
  gap: 1rem;
`;

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${props => props.theme["gray-700"]};
  color: ${props => props.theme["gray-300"]};
  cursor: pointer;
  svg {
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
  }
  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${props => props.theme["gray-600"]};
  }
  &[data-state='checked'] {
    color: ${props => props.theme.white};
    background: ${props => props.variant === 'income' ? props.theme["green-500"] : props.theme["red-500"]};
    svg {
      color: ${props => props.theme.white};
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  background: transparent;
  color: ${props => props.theme["gray-500"]};
  line-height: 0;
  cursor: pointer;
`;