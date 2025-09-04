import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {
  FilterOptionsQuery,
  filterQuery,
  getMetaObjectQuery,
} from "~/queries/FilterQuery";
import axiosInstance from "~/services/api-client";

type FilterOption = {
  label: string;
  options: string[];
  // add other properties if needed
};

const fetchFilterOptions = async () => {
  const response = await axiosInstance.post("", { query: filterQuery });

  const metafield = response.data?.data?.collection?.metafield;

  let object = JSON.parse(metafield.value);
  console.log(object.filters);
  const filters = object.filters.map((object: any) => {
    const label = object.label;
    const options = object.options?.map((element: any) => element.label) || [];
    return { label, options };
  });

  return filters;
};

const useFilterOptions = () => {
  return useQuery({ queryKey: ["filters"], queryFn: fetchFilterOptions });
};

export default useFilterOptions;
