import React from "react";
import { Button, Input } from "reactstrap";
import "./LogIn.scss";

function LogIn() {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <form>
        <div className="content">
          <h2>ĐĂNG NHẬP</h2>
          <div className="divLogIn">
            <table>
              <tr>
                <th>Tên tài khoản:</th>
                <td>
                  <Input />
                </td>
              </tr>
              <tr>
                <th>Mật khẩu:</th>{" "}
                <td>
                  <Input />
                </td>
              </tr>
              <td>
                <Button outline color="primary">
                  Đăng Nhập
                </Button>
              </td>
              <td>
                <span id="error"></span>
              </td>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
}
export default LogIn;
