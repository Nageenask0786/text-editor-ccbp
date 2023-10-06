import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-color: #25262c;
  min-height: 100vh;
`
export const Container = styled.div`
  display: flex;
  width: 80vw;
  height: 70vh;
  background-color: #1b1c22;
  background-size: cover;
`
export const TextEditorImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 45%;
`
export const TextEditorContainer = styled.div`
  display: flex;
  background-color: #25262c;
  background-size: cover;
  height: 90%;
  width: 50%;
  border-style: solid;
  border-radius: 9px;
  border-width: 1px;
  border-color: #334155;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
`

export const TextArea = styled.textarea`
  background-color: transparent;
  border: 0px;
  font-weight: ${props => props.Weight};
  font-style: ${props => props.Style};
  text-decoration: ${props => props.Decoration};
  color: #ffffff;
  cursor: pointer;
  outline: none;
  margin-top: 5px;
  font-size: 15px;
`
export const Li = styled.li`
  list-style-type: none;
`
export const ButtonContainer = styled.ul`
  display: flex;
  border-style: solid;
  border-radius: 9px;
  border-width: 1px;
  border-color: #334155;
  height: 50px;
  width: 100%;
  background-size: cover;
  background-color: transparent;
`
export const Button = styled.button`
  outline: none;
  background-color: transparent;
  border: 0px;
  margin-left: 10px;
  color: ${props => props.color};
`
