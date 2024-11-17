import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { _get, getCmsUrl } from "@/api";

const useFaqs = () => {
  const [data, setData] = useState([]);
  const locale = useLocale();
  const isBn = locale === "bn";

  const call = async () => {
    const res = await _get(getCmsUrl("/faq").replace("/page", ""));
    setData(res.data.data);
  };

  useEffect(() => {
    call();
  }, []);

  const faqs = data.map((item: any) => {
    return {
      question: isBn ? item?.question_bn : item.question,
      answer: isBn ? item.answer_bn : item.answer,
    };
  });

  return { faqs };
};

export default useFaqs;
