import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 100px;
`

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const BigTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
`

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`

const Item = styled.div`
  width: 370px;
  height: 400px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`

const Img = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Title = styled.div`
  font-size: 20px;
`

const Desc = styled.div`
  font-size: 15px;
  color: #BCBCBC;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>2022 IWOP PORTFOLIO</title>
        <meta name="description" content="2022 IWOP PORTFOLIO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <TopWrapper>
          <BigTitle>2022 IWOP PORTFOLIO</BigTitle>
        </TopWrapper>
        <ItemWrapper>
          <Item>
            <Img src='https://cdn.pixabay.com/photo/2021/11/29/15/01/christmas-6832802_640.jpg' />
            <TextWrapper>
              <Title>안녕</Title>
              <Desc>안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕</Desc>
            </TextWrapper>
          </Item>
          <Item>
            <Img src='https://cdn.pixabay.com/photo/2021/11/29/15/01/christmas-6832802_640.jpg' />
            <TextWrapper>
              <Title>안녕</Title>
              <Desc>안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕</Desc>
            </TextWrapper>
          </Item>
          <Item>
            <Img src='https://cdn.pixabay.com/photo/2021/11/29/15/01/christmas-6832802_640.jpg' />
            <TextWrapper>
              <Title>안녕</Title>
              <Desc>안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕</Desc>
            </TextWrapper>
          </Item>
          <Item>
            <Img src='https://cdn.pixabay.com/photo/2021/11/29/15/01/christmas-6832802_640.jpg' />
            <TextWrapper>
              <Title>안녕</Title>
              <Desc>안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕</Desc>
            </TextWrapper>
          </Item>
          <Item>
            <Img src='https://cdn.pixabay.com/photo/2021/11/29/15/01/christmas-6832802_640.jpg' />
            <TextWrapper>
              <Title>안녕</Title>
              <Desc>안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕</Desc>
            </TextWrapper>
          </Item>
          <Item>
            <Img src='https://cdn.pixabay.com/photo/2021/11/29/15/01/christmas-6832802_640.jpg' />
            <TextWrapper>
              <Title>안녕</Title>
              <Desc>안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕</Desc>
            </TextWrapper>
          </Item>
          
        </ItemWrapper>
      </Container>
    </>
  )
}
