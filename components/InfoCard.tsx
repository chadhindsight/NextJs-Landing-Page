import type { NextPage } from "next";
import { Card, Text, Row, Col, Button } from '@nextui-org/react';

interface Props {
    location: string;
    cost: number;
    rating: number;
    imageUrl: string;
}

export const InfoCard: NextPage<Props> = (props) => {
    const { location, cost, imageUrl, rating } = props

    return (
        <Card>
            <Card.Header css={{ position: "absolute", top: 5 }}>
                <Col>
                    <Text size={24} weight="bold"
                        transform="uppercase" color="#ffffffAA">
                        {location}
                    </Text>
                    <Text h3
                        color="white">
                        {`Rating: ${rating}/5`}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image src={imageUrl}></Card.Image>
            <Card.Footer isBlurred
                css={{
                    position: 'absolute',
                    bgBlur: "#0f111466",
                    bottom: 0
                }}>
                <Row>
                    <Col>
                        <Text color="#d1d1d1" size={18} weight="medium">
                            {`$ ${cost}`}
                        </Text>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <Button flat auto rounded color="primary">
                                <Text
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase">Book Today</Text>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}
