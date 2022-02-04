import { FC } from "react";
import { Layout } from "../components/layout";

export const App: FC = ({ children }) => {
  return <Layout>{children}</Layout>;
};
export default App;
