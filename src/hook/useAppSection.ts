import { _get, getCmsUrl } from "@/api";
import { useEffect, useState } from "react";

const useAppSection = () => {
  const [appSection, setAppSection] = useState<any>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const call = async () => {
    const app = await _get(getCmsUrl("/app-section").replace("/page", ""));
    setAppSection(app.data.data.data);
    setImageUrl(app.data.data.image_url);
  };
  useEffect(() => {
    call();
  }, []);
  return {
    appSection,
    imageUrl,
  };
};

export default useAppSection;
