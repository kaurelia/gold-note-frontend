import { mdiPlus } from "@mdi/js";
import BalanceBox from "~frontend/source/components/balance-box/balance-box";
import Button from "~frontend/source/components/button/button";
import { ButtonVariant } from "~frontend/source/components/button/button.types";
import WelcomeSection from "~frontend/source/components/welcome-section/welcome-section";
import Page from "../../components/page/page";

const Home = () => {
  return (
    <Page name="home">
      <WelcomeSection />
      <BalanceBox />
      <Button icon={mdiPlus}>Add gold</Button>
      <Button variant={ButtonVariant.Light}>More</Button>
    </Page>
  );
};
export default Home;
