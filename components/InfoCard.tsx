import type { NextPage } from "next";
import { Card, Text, Row, Col, Button } from '@nextui-org/react';

interface Props {
    location: string;
    cost: number;
    imageUrl: string;
}

export const InfoCard: NextPage<Props> = (props) => {
    const { location, cost, imageUrl } = props

    return (
        <Card>
            <Card.Header css={{ position: "absolute", top: 5 }}>
                <Col>
                    <Text size={12} weight="bold"
                        transform="uppercase" color="#ffffffAA">
                        {location}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image src={imageUrl}></Card.Image>
            <Card.Footer>
                <Row>
                    <Col>
                        <Text>{location}</Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Text>{cost}</Text>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}
