import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { Navigation, NavItem } from "~/entities/Navigation";
import { MainNavigationQuery } from "~/queries/MainNavigationQuery";
import axiosInstance from "~/services/api-client";

function normalizeUrl(url: string): string {
  const shopifyDomain = "https://specialized-demo-store.myshopify.com";
  return url.replace(shopifyDomain, "");
}

export const fetchMainNavigation = async (): Promise<Navigation> => {
  const response = await axiosInstance.post("", { query: MainNavigationQuery });
  const items = response.data.data.menu.items;
  return {
    items: items.map((item: NavItem) => ({
      title: item.title,
      url: normalizeUrl(item.url),
    })),
  };
};

const useMainNavigation = () => {
  return useQuery<Navigation, Error>({
    queryKey: ["navigation"],
    queryFn: fetchMainNavigation,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export default useMainNavigation;
