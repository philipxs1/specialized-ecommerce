import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FilterOptionsQuery, getMetaObjectQuery } from "~/queries/FilterQuery";
import axiosInstance from "~/services/api-client";

type MetaField = {
  key: string;
  value: string;
  // add other properties if needed
};

const fetchFilterOptions = async () => {
  const response = await axiosInstance.post("", { query: FilterOptionsQuery });

  const metafield = response.data.data.collection.metafield;

  const metaObjectGids = JSON.parse(metafield.value);

  const metaResponse = await axiosInstance.post("", {
    query: getMetaObjectQuery,
    variables: { ids: metaObjectGids },
  });

  const nodes = metaResponse.data.data.nodes;

  const filters = nodes.map((object: any) => {
    const label =
      object.fields.find((f: MetaField) => f.key === "label")?.value || "";
    const type =
      object.fields.find((f: MetaField) => f.key === "type")?.value || "";
    const options = JSON.parse(
      object.fields.find((f: MetaField) => f.key === "options")?.value || [],
    );

    return { label, type, options };
  });

  return filters;
};

const useFilterOptions = () => {
  return useQuery({ queryKey: ["filters"], queryFn: fetchFilterOptions });
};

export default useFilterOptions;
