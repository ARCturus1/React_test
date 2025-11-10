import { Alert, ConfigProvider, Divider, Input, theme } from "antd";
import { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/fetch";
import CitiesList from "../../components/CitiesList";
import "./styles.css";
import { Empty } from "antd";
import { useDebounce } from "../../hooks/debounce";
import { useThemeContext } from "../../contexts/ThemeContext";
import Spiner from "../../shared/components/Spiner";
import { citiesListBySearchText } from "../../api/city.api";

export function ListPage() {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  const [diffHeight, setDiffHeight] = useState<string | undefined>(undefined);
  const searchAndOtherElContainer = useRef<HTMLDivElement>(null);
  const handleSearchDebounced = useDebounce(setSearchValue, 300);
  const currentTheme = useThemeContext();

  // Measure height once on mount and on resize
  useEffect(() => {
    const measureHeight = () => {
      if (searchAndOtherElContainer.current) {
        const { height: currentHeight } =
          searchAndOtherElContainer.current.getBoundingClientRect();
        setDiffHeight(`${currentHeight}px`);
      }
    };

    measureHeight();
    window.addEventListener("resize", measureHeight);

    return () => {
      window.removeEventListener("resize", measureHeight);
    };
  }, []);

  const { data, loading, error } = useFetch(
    [searchValue],
    searchValue ? citiesListBySearchText(searchValue) : undefined
  );

  // Handle API errors
  if (error) {
    return <Alert message="Failed to load cities" type="error" />;
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target?.value) {
      return;
    }

    handleSearchDebounced(target.value); // 1 option
    // startTransition(() => setSearchValue(target.value)); // 2 option
  };

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

export default ListPage;
