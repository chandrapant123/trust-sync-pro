import { useParams, Navigate } from "react-router-dom";
import { industries } from "@/data/industries";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? industries[slug] : undefined;

  if (!data) return <Navigate to="/" replace />;

  return <IndustryPageTemplate data={data} />;
};

export default IndustryPage;
