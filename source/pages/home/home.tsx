import { mdiPlus } from "@mdi/js";
import BalanceBox from "~frontend/source/components/balance-box/balance-box";
import Button from "~frontend/source/components/button/button";
import { ButtonVariant } from "~frontend/source/components/button/button.types";
import Card from "~frontend/source/components/card/card";
import WelcomeSection from "~frontend/source/components/welcome-section/welcome-section";
import Page from "../../components/page/page";

const Home = () => {
  return (
    <Page name="home">
      <WelcomeSection />
      <BalanceBox />
      <Button icon={mdiPlus}>Add asset</Button>
      <Button variant={ButtonVariant.Light}>More</Button>
      <Card
        amount="+ $100"
        shopDate="27.03.2023"
        imagePath="/images/gold-bars.png"
        name="My first asset"
        group="For rent"
      />
    </Page>
  );
};
export default Home;
