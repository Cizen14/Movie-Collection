import { Button, Col, Form, Row } from "react-bootstrap"

const SearchForm =() =>{
    return(
        <>
        <div className="bg-black p-5 rounded shadow-lg">
            <Row>
                <Col>
                <Form.Control placeholder="Search By Title" />
                </Col>
                <Col>
                <Button> Search Movie</Button>
                </Col>
            </Row>
        </div>
        </>
    )

}
export default SearchForm