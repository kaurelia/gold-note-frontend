import { mdiPlus } from "@mdi/js";
import BalanceBox from "~frontend/source/components/balance-box/balance-box";
import Button from "~frontend/source/components/button/button";
import Page from "../../components/page/page";

const Home = () => {
  return (
    <Page name="home">
      <BalanceBox />
      <Button icon={mdiPlus}>Add asset</Button>
    </Page>
  );
};
export default Home;
