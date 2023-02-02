import { act, render } from "@testing-library/react";
import App from "./app";

describe("Test app component", () => {
  it("Check if loader component renders properly", async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("Check if page component renders properly", async () => {
    const { container } = render(<App />);
    await act(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
