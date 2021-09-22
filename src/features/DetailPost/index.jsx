import React from 'react'
import { Col, Container, Input, Row } from 'reactstrap';
import Header from '../../components/Header';

const DetailPost = () => {
    return (
        <>
            
            <Header />
            <hr />
            <Container>
                <Row>
                    <Col sm="8">
                    Thông báo:
I. Lịch thi kết thúc môn học vào thứ 4 ngày 02/6/2021
Ca1: từ 1h30
Ca2: từ 15h10
II. Nội dung giao bài những lớp học Tuần 15
Ôn tập nội dung thi cuối kỳ
- Bài tâp 1: Chống đẩy (tính số lần thực hiện tối đa)
- Bài tập 2: Vượt chướng ngại vât (thực hiện trong 20 giây)
III. Thi kết thúc môn đối với những lớp học Tuần 16
Nội dung: Sinh viên lựa chọn 1 trong 2 bài tập sau
- Bài tâp 1: Chống đẩy (tính số lần thực hiện tối đa)
- Bài tập 2: Vượt chướng ngại vât (thực hiện trong 20 giây)
IV. Ghi chú
- Chuẩn bị mạng tốt để thi
- Các em khởi động trước khi thi
- Các em vào phòng zoom đặt tên hiển thị như STT và Họ và tên: VD. 1. Đinh Vũ Lan Anh
- Các em mặc trang phục phù hợp
- Chuẩn bị thẻ sinh viên, khi thi đưa thẻ vào camera
- Chuẩn bị góc quay hợp lý
- Thực hiện bài thi và được thầy công bố điểm ngay khi kết thúc bài thi
                    </Col>
                    <Col sm="4">
                        <Input type="file" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailPost;
