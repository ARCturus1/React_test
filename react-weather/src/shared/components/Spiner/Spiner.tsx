import { Spin } from 'antd';
import { LoadingOutlined } from "@ant-design/icons";
import './Spiner.css';

export function Spiner() {
    return (
        <Spin
        className="spiner"
        spinning={true}
        indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
      />
    )
}