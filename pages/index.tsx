import { Button, Col, Container, Grid, Navbar, Text, Link } from '@nextui-org/react'
import InfoCards from '../components/InfoCards'

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar isCompact variant={"static"} maxWidth="xl">
        <Navbar.Brand>
          <Text b color="inherit">Travelify</Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href='#'>Book your trip today</Navbar.Link>
          <Navbar.Link href='#'>Community</Navbar.Link>
          <Navbar.Link href='#'>Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href='#'>Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href='#'>
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container
        justify='center'
        css={{
          "height": "500px",
          "backgroundImage": "url(https://littlevisuals.co/images/downtown.jpg)",
          "backgroundPosition": "center"
        }} >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ "width": "100%" }}>
            <Text weight={"bold"} size={80} css={{ "textAlign": "center" }}>The Travel Platform</Text>
            <Text weight={"bold"} size={80} css={{ "textAlign": "center" }}>Of The Future</Text>
            <Button size="md" shadow color="gradient" css={{ "width": "100%", "marginTop": "10px" }}>
              Join For Free
            </Button>
          </Col>
        </Grid>
      </Grid.Container>
      {
        /* 3 product display cards */
        <InfoCards />
      }
      {/* TODO: Add footer component */}
      <footer>
        <Grid.Container justify="flex-start">
          <Link href="#">
            <Text className='foot-text'>Link Here</Text>
          </Link>
          <Link href="#">
            <Text className='foot-text'>Link Here</Text>
          </Link>
          <Link href="#">
            <Text className='foot-text'>Link Here</Text>
          </Link>
        </Grid.Container>
      </footer>
    </>
  )
}
