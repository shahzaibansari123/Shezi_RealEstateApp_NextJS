import { useState, useEffect } from "react";
import {
  Flex,
  Select,
  Text,
  Icon,
  Box,
  Spinner,
  Input,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { MdCancel } from "react-icons/md";

import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router=useRouter()

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      query[item.name] = item.value;
    });

    router.push({ pathname: path, query });
  };
  //location k hisab se bhi search filter laga skty api me autocomplete request se agr chahein
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            p="2"
            w="fit-content"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
