import React, {useEffect, useState} from "react";
import useDebounce from "../../../features/GameListPage/hooks/useDebounce";
import styled from "styled-components";

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 16px;
  gap: 8px;
`;

const FilterLabel = styled.label`
  margin-right: 8px;
`;

const FilterSelect = styled.select`
  width: 110px;
`;

export const Filters = ({platforms, handleChangeFilter}) => {
    const [search, setSearch] = useState(null)
    const debouncedSearch = useDebounce(search, 500)

    const handleSetSearch = ({target: {value}}) => setSearch(value)

    useEffect(() => {
        if (debouncedSearch === null) {
            return
        }

        handleChangeFilter({target: {name: "search", value: debouncedSearch}})
    }, [debouncedSearch])


    return (
        <SearchBar>
            <div>
                <FilterLabel htmlFor="search">Search by title:</FilterLabel>
                <input id="search" type="text" onChange={handleSetSearch}/>
            </div>
            <div>
                <FilterLabel htmlFor="platform">Filter by platform:</FilterLabel>
                <FilterSelect id="platform" name="platform" onChange={handleChangeFilter}>
                    <option value="">All</option>
                    {platforms.map((platform) => (
                        <option key={platform.id} value={platform.id}>{platform.name}</option>
                    ))}
                </FilterSelect>
            </div>
            <div>
                <FilterLabel htmlFor="sortBy">Sort by:</FilterLabel>
                <FilterSelect id="sortBy" name="ordering" onChange={handleChangeFilter}>
                    <option value="">None</option>
                    <option value="rating">↑ rating</option>
                    <option value="-rating">↓ rating</option>
                    <option value="released">↑ release</option>
                    <option value="-released">↓ release</option>
                </FilterSelect>
            </div>
        </SearchBar>
    )
}