import { Spin } from 'antd';
import { LoadingOutlined } from "@ant-design/icons";
import './Spiner.css';

/**
 * A loading spinner component using Ant Design's Spin component.
 * Displays a rotating loading indicator with a custom icon.
 * @returns The loading spinner component.
 */
export function Spiner() {
    return (
        <Spin
        className="spiner"
        spinning={true}
        indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
      />
    )
}
