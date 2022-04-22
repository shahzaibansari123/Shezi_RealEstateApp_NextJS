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

  const searchProperties = (filterValues) => {};

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
          ></Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
