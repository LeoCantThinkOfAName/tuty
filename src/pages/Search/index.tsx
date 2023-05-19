import { FC } from "react";
import { useParams } from "react-router-dom";

export const SearchPage: FC = () => {
  const { term } = useParams();

  return <>{term}</>;
};
