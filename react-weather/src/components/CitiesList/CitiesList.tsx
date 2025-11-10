import type { CityModel } from "../../models/CityModel";
import CityItem from "./components/CityItem";
import "./styles.css";
import { List } from "antd";

export function CitiesList({
  cities,
  diffHeight = '0',
}: {
  cities: CityModel[];
  diffHeight: string | undefined;
}) {
  return (
    <div className="cities-list-container" style={{ height: `calc(100% - ${diffHeight} - 33px)` }}>
      <List className="cities-list" dataSource={cities}>
        {cities.map((city) => (
          <List.Item key={city.id}>
            <CityItem city={city} />
          </List.Item>
        ))}
      </List>
    </div>
  );
}
