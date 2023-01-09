import AppProvider from "~frontend/source/components/app-provider/app-provider";
import AppWrapper from "~frontend/source/components/app-wrapper/app-wrapper";

const App = () => {
  return (
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  );
};
export default App;
