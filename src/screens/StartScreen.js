import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>You're welcome</Header>
      <Paragraph>
        Let's start our journey! We will help you to find the best places.
      </Paragraph>
      
      <Button
      
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        🤝 Sign Up
      </Button><Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
         Login
      </Button>
    </Background>
  )
}
