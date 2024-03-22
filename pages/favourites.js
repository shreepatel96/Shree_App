import { Card, Pagination } from 'react-bootstrap'
import { ArtworkCard } from '../components'
import { useAtom } from 'jotai'
import { favouritesAtom } from '../store'
import { Row, Col } from 'react-bootstrap'

export default function Favourites() {
    const [vrajfavlist, setvrajfavlist] = useAtom(favouritesAtom)

    if (!vrajfavlist) return null

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>
                        <h2>Favourite Artist</h2>
                    </Card.Title>
                </Card.Body>
            </Card>
            <Row className='gy-4'>
                {!vrajfavlist.length ? (
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <h4>Nothing Here to show</h4>
                            </Card.Title>
                            <Card.Text>
                                you may try some design to this particular lists.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ) : (
                    vrajfavlist.map((objectID) => (
                        <Col lg={3} key={objectID}>
                            <ArtworkCard objectID={objectID} />
                        </Col>
                    ))
                )}
            </Row>
        </>
    )
}
