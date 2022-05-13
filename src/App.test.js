import '@testing-library/jest-dom'
import App from "./App.svelte";
import { render, fireEvent } from "@testing-library/svelte"

it("renders hello world", () => {
    const { getByText } = render(App)

    expect(getByText("Hello world!")).toBeInTheDocument();
})

it("contains an image", () => {
    const { getByRole } = render(App)

    expect(getByRole("img")).toBeInTheDocument()
})

it("increments by one when the plus button is clicked", async() => {
    const { getByText } = render(App)

    const plusButton = getByText('+')

    await fireEvent.click(plusButton)

    expect(getByText('The count is 1')).toBeInTheDocument()
})

it("decrements by one when the minus button is clicked", async() => {
    const { getByText } = render(App)

    const minusButton = getByText('-')

    await fireEvent.click(minusButton)
    // interestingly, the count does not reset even though the app is rendered a second time...
    await fireEvent.click(minusButton)

    expect(getByText('The count is -1')).toBeInTheDocument()
})

it("resets the count when the reset button is clicked", async() => {
    const { getByText } = render(App)

    const plusButton = getByText('+')
    const resetButton = getByText('reset')

    await fireEvent.click(plusButton)
    await fireEvent.click(resetButton)

    expect(getByText('The count is 0')).toBeInTheDocument()
})