import React from 'react'
import { useHistory } from 'react-router'
import { Col, Container, Row } from 'reactstrap'
import Header from '../../components/Header'
import PaginationComponent from '../../components/Pagination'

const DetailSubject = () => {
    const history = useHistory();
    return (
        <>
            <Header />
            <hr />
            <Container>
                <Row>
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <div className="mb-5 border" onClick={() => {history.push("/homepage/detail-subject/detail-post")}}>
                            <div>Nguyễn Văn Sơn đã đăng một bài tập mới: Tuần 16 từ ngày 31/5-4/6/2021</div>
                            <div>26-5</div>
                        </div>

                        <div className="mb-5 border">
                            <div>Nguyễn Văn Sơn đã đăng một bài tập mới: Tuần 16 từ ngày 31/5-4/6/2021</div>
                            <div>26-5</div>
                        </div>

                        <div className="mb-5 border">
                            <div>Nguyễn Văn Sơn đã đăng một bài tập mới: Tuần 16 từ ngày 31/5-4/6/2021</div>
                            <div>26-5</div>
                        </div>

                        <div className="mb-5 border">
                            <div>Nguyễn Văn Sơn đã đăng một bài tập mới: Tuần 16 từ ngày 31/5-4/6/2021</div>
                            <div>26-5</div>
                        </div>
                        <div className="mb-5 border">
                            <div>Nguyễn Văn Sơn đã đăng một bài tập mới: Tuần 16 từ ngày 31/5-4/6/2021</div>
                            <div>26-5</div>
                        </div>
                        <PaginationComponent />
                    </Col>
                    <Col sm="2"></Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailSubject
