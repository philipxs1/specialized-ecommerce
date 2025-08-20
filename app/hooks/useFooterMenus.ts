import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { FooterItem, FooterMenus } from "~/entities/FooterMenus";
import {
  FooterAboutQuery,
  FooterResourcesQuery,
  FooterShopQuery,
  FooterSupportQuery,
} from "~/queries/FooterMenuQuery";
import axiosInstance from "~/services/api-client";

const fetchFooterMenus = async (): Promise<FooterMenus> => {
  const [shopRes, supportRes, resourcesRes, aboutRes] = await Promise.all([
    axiosInstance.post("", { query: FooterShopQuery }),
    axiosInstance.post("", { query: FooterSupportQuery }),
    axiosInstance.post("", { query: FooterResourcesQuery }),
    axiosInstance.post("", { query: FooterAboutQuery }),
  ]);

  const shopData = shopRes.data.data.menu;
  const supportData = supportRes.data.data.menu;
  const resourcesData = resourcesRes.data.data.menu;
  const aboutData = aboutRes.data.data.menu;

  return {
    shop: shopData.items.map((item: FooterItem) => item.title),
    support: supportData.items.map((item: FooterItem) => item.title),
    resources: resourcesData.items.map((item: FooterItem) => item.title),
    about: aboutData.items.map((item: FooterItem) => item.title),
  };
};

const useFooterMenus = () => {
  const queryClient = useQueryClient();

  return useQuery<FooterMenus, Error>({
    queryKey: ["footerMenus"],
    queryFn: fetchFooterMenus,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    initialData: () => queryClient.getQueryData<FooterMenus>(["footerMenus"]),
    initialDataUpdatedAt: () =>
      queryClient.getQueryState(["footerMenus"])?.dataUpdatedAt,
  });
};

export default useFooterMenus;
