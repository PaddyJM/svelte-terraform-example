import '@testing-library/jest-dom'
import App from "./App.svelte";
import { render } from "@testing-library/svelte"

it("renders hello world", () => {
    const { getByText } = render(App)

    expect(getByText("Hello world!")).toBeInTheDocument();
})