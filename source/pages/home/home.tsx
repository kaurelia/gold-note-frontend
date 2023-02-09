import { mdiPlus } from "@mdi/js";
import BalanceBox from "~frontend/source/components/balance-box/balance-box";
import Button from "~frontend/source/components/button/button";
import { ButtonVariant } from "~frontend/source/components/button/button.types";
import CardSection from "~frontend/source/components/card-section/card-section";
import WelcomeSection from "~frontend/source/components/welcome-section/welcome-section";
import Page from "../../components/page/page";

const Home = () => {
  return (
    <Page name="home">
      <WelcomeSection />
      <BalanceBox />
      <Button icon={mdiPlus}>Add asset</Button>
      <Button variant={ButtonVariant.Light}>More</Button>
      <CardSection />
    </Page>
  );
};
export default Home;
