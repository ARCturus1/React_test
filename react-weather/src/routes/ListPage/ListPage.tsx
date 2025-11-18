import { Alert, ConfigProvider, Divider, Input, theme } from "antd";
import { startTransition, useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/fetch";
import CitiesList from "../../components/CitiesList";
import "./styles.css";
import { Empty } from "antd";
// import { useDebounce } from "../../hooks/debounce";
import { useThemeContext } from "../../contexts/ThemeContext";
import Spiner from "../../shared/components/Spiner";
import { citiesListBySearchText } from "../../api/city.api";
import type { CityWeatherResponse } from "./models";
import { useSearchParams } from "react-router-dom";

/**
 * ListPage component displays a list of cities based on search input.
 * It handles search functionality, loading states, and error handling.
 */
export function ListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState<string | undefined>(
    searchParams.get("searchValue") || undefined
  );
  const [diffHeight, setDiffHeight] = useState<string | undefined>(undefined);
  const searchAndOtherElContainer = useRef<HTMLDivElement>(null);
  // const handleSearchDebounced = useDebounce(setSearchValue, 300);
  const currentTheme = useThemeContext();
  // Measure height once on mount and on resize
  useEffect(() => {
    const measureHeight = () => {
      if (searchAndOtherElContainer.current) {
        const currentHeight = searchAndOtherElContainer.current?.offsetHeight;
        setDiffHeight(`${currentHeight}px`);
      }
    };
    measureHeight();
    window.addEventListener("resize", measureHeight);
    return () => {
      window.removeEventListener("resize", measureHeight);
    };
  }, []);
  // Update URL parameters when searchValue changes
  useEffect(() => {
    if (searchValue === searchParams.get('searchValue')) { return; }
    if (searchValue) {
      searchParams.set("searchValue", searchValue);
    } else {
      searchParams.delete("searchValue");
    }
    setSearchParams(searchParams);
  }, [searchValue]);
  // Fetch city data based on search value
  const { data, loading, error } = useFetch<CityWeatherResponse>(
    [searchValue],
    searchValue ? citiesListBySearchText(searchValue) : undefined
  );
  // Handle API errors
  if (error) {
    return <Alert message="Failed to load cities" type="error" />;
  }
  // Handle search input changes
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    // handleSearchDebounced(target.value); // 1 option
    startTransition(() => setSearchValue(target.value)); // 2 option
  };
  // Determine theme algorithm based on current theme
  const algorithm =
    currentTheme.theme === "dark"
      ? theme.darkAlgorithm
      : theme.defaultAlgorithm;
  return (
    <ConfigProvider theme={{ algorithm }}>
      <section className="list-page-container">
        <div ref={searchAndOtherElContainer}>
          <Input.Search
            size="large"
            placeholder="Enter city"
            enterButton
            value={searchValue ? searchValue : undefined}
            onChange={handleChange}
          />
          <Divider />
        </div>
        {!loading ? (
          data?.results?.length ? (
            <CitiesList cities={[...data?.results]} diffHeight={diffHeight} />
          ) : (
            <Empty
              description="No cities found"
              styles={{ image: { height: 60 } }}
            />
          )
        ) : (
          <Spiner />
        )}
      </section>
    </ConfigProvider>
  );
}
