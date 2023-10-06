import {Component} from 'react'

import {AiOutlineBold, AiOutlineUnderline} from 'react-icons/ai'

import {FaItalic} from 'react-icons/fa'

import {
  AppContainer,
  Container,
  TextEditorImageContainer,
  TextEditorContainer,
  ButtonContainer,
  Button,
  TextArea,
  Li,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
    Value: '',
  }

  onClickOFBold = () => {
    this.setState(prevState => ({
      isBoldActive: !prevState.isBoldActive,
    }))
  }

  onClickOFItalic = () => {
    this.setState(prevState => ({
      isItalicActive: !prevState.isItalicActive,
    }))
  }

  onClickOFUnderline = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  onChangeOfText = event => {
    this.setState({Value: event.target.value})
  }

  render() {
    const {isBoldActive, isItalicActive, isUnderlineActive, Value} = this.state
    const fontWeight = isBoldActive ? 'bold' : 'normal'
    const fontStyle = isItalicActive ? 'italic' : 'normal'
    const textDecoration = isUnderlineActive ? 'underline' : 'normal'
    const color1 = isBoldActive ? '#faff00' : '#f1f5f9'
    const color2 = isItalicActive ? '#faff00' : '#f1f5f9'
    const color3 = isUnderlineActive ? '#faff00' : '#f1f5f9'
    return (
      <AppContainer>
        <h1>Text Editor</h1>
        <Container>
          <TextEditorImageContainer>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              height="70%"
              width="80%"
            />
          </TextEditorImageContainer>
          <TextEditorContainer>
            <ButtonContainer>
              <Li>
                <Button
                  type="button"
                  onClick={this.onClickOFBold}
                  data-testid="bold"
                  color={color1}
                >
                  <AiOutlineBold size={25} />
                </Button>
              </Li>
              <Li>
                <Button
                  type="button"
                  onClick={this.onClickOFItalic}
                  data-testid="italic"
                  color={color2}
                >
                  <FaItalic size={25} />
                </Button>
              </Li>
              <Li>
                <Button
                  type="button"
                  onClick={this.onClickOFUnderline}
                  data-testid="underline"
                  color={color3}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </Li>
            </ButtonContainer>
            <TextArea
              onChange={this.onChangeOfText}
              rows="40"
              cols="60"
              Weight={fontWeight}
              Decoration={textDecoration}
              Style={fontStyle}
              value={Value}
            >
              {Value}
            </TextArea>
          </TextEditorContainer>
        </Container>
      </AppContainer>
    )
  }
}

export default TextEditor
