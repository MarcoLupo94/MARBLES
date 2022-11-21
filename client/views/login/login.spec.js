import React from 'react';
// import renderer, { act } from 'react-test-renderer';
//All for old version. Needs update.
import Login from './login';
import { Alert } from 'react-native';
import { render, act, fireEvent, screen } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from '../../App'


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.spyOn(Alert, 'alert');

// const element = screen.getByTestId('unique-id');

describe('Login page', () => {
  test('should render correctly', () => {
    const tree = render(<Login />)
    const treejson = tree.toJSON();
    expect(treejson).toMatchSnapshot();
  });
  test('should trigger alert when click login button without email input', async () => {

    render(<Login />)
    // const mockOnPress = jest.fn()
    const button = screen.getByTestId("login-button");
    fireEvent.press(button)
    const errorMessageText = 'Please enter email address'
    // await act(async () => button.onPress());
    expect(Alert.alert).toHaveBeenCalledWith(errorMessageText)

  });

  test('should trigger alert when click login button with email input but without password input', async () => {
    render(<Login />)
    const button = screen.getByTestId("login-button");
    const emailInput = screen.getByTestId("email-input");
    fireEvent.changeText(emailInput, 'test@gmail.com');
    fireEvent.press(button)
    const errorMessageText = 'Please enter password'
    expect(Alert.alert).toHaveBeenCalledWith(errorMessageText)

  });

  test('should trigger alert when passing wrong email-password pairs', async () => {
    render(<Login />)
    const button = screen.getByTestId("login-button");
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.changeText(emailInput, 'test@gmail.com');
    fireEvent.changeText(passwordInput, 'testpassword');
    fireEvent.press(button)
    const errorMessageText = 'Please register'
    expect(Alert.alert).toHaveBeenCalledWith(errorMessageText)
  });

  test('should go to register page when click the button', async () => {
    const component = (
      <NavigationContainer>
        <App />
      </NavigationContainer>
    );
    render(component);
    const button = screen.getByTestId("register-button");
    fireEvent.press(button)
    const registerEmailInput = screen.getByTestId("email-input-register");
    expect(registerEmailInput).toBeTruthy();
  })
})

// it ('does stuff', () => {
//   const mock = jest.fn()
//   const component = render(<Search onSearchTextChange={mock}/>)
//   fireEvent.changeText(component.findByType(TextInput), 'test')
//   expect(mock).toHaveBeenCalledWith('test')
// })


// Alert.alert('Title', 'Message', [{text: 'OK', onPress: mockOnPress}])

// /**
//  * here we inspect the mock to get:
//  * - the latest call to Alert.alert (`calls[0]`)
//  * - its third argument (`calls[0][2]`), which is the buttons config array
//  * - the first button in the array and its onPress (`calls[0][2][0].onPress()`)
//  */
// Alert.alert.mock.calls[0][2][0].onPress()

// expect(mockOnPress).toBeCalled()