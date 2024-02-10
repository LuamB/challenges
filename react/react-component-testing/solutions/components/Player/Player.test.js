import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    render(<Player name="sven" score={1234}></Player>)

    const playerName = screen.getByText("sven")
    const score = screen.getByText("1234")

    const allButtons = screen.getAllByRole("button")

    expect(playerName).toBeInTheDocument()
    expect(score).toBeInTheDocument()
    expect(allButtons).toHaveLength(2)
});

test("calls callbacks when increasing or decreasing score", async () => {

    const increaseCallback = jest.fn()
    const decreaseCallback = jest.fn()

    render(<Player onIncreasePlayerScore={increaseCallback} onDecreasePlayerScore={decreaseCallback}></Player>)

    const user = userEvent.setup()

    const increaseButton = screen.getByRole("button", {
        name: "Increase Score"
    })
    const decreaseButton = screen.getByRole("button", {
        name: "Decrease Score"
    })

    await user.click(increaseButton)
    await user.click(increaseButton)
    await user.click(increaseButton)
    await user.click(decreaseButton)
    await user.click(decreaseButton)

    expect(increaseCallback.mock.calls).toHaveLength(3)
    expect(decreaseCallback.mock.calls).toHaveLength(2)
});
