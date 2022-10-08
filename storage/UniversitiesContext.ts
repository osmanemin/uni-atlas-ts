import { createContext } from "react";
const UniversitiesContext = createContext<UniversitiesPageProps>({
  universities: [],
});
export default UniversitiesContext;
