import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

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