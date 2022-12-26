import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'
import { Content, contents } from '../data'

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
  position: relative;
`

const Img = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 8px;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`

const Desc = styled.div`
  font-size: 15px;
  color: #BCBCBC;
`

const Author = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 15px;
  color: #656565;
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
          {contents.map((content: Content, idx: number) => (
            <Link href={content.link} target="_blank" key={idx}>
              <Item>
                <Img src={content.img} />
                <TextWrapper>
                  <Title>{content.title}</Title>
                  <Desc>{content.desc}</Desc>
                  <Author>{content.author}</Author>
                </TextWrapper>
              </Item>
            </Link>
          ))}
        </ItemWrapper>
      </Container>
    </>
  )
}
