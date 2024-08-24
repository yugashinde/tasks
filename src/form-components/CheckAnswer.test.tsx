import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { CheckAnswer } from "./CheckAnswer";
import userEvent from "@testing-library/user-event";

describe("CheckAnswer Component tests", () => {
    test("There is an input box", () => {
        render(<CheckAnswer expectedAnswer="42" />);
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).toBeInTheDocument();
    });
    test("The answer is originally incorrect.", () => {
        render(<CheckAnswer expectedAnswer="42" />);
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Entering the right answer makes it correct.", async () => {
        render(<CheckAnswer expectedAnswer="42" />);
        const inputBox = screen.getByRole("textbox");
        await act(async () => {
            userEvent.type(inputBox, "42");
        });
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Entering the wrong answer makes it incorrect.", async () => {
        render(<CheckAnswer expectedAnswer="42" />);
        const inputBox = screen.getByRole("textbox");
        await act(async () => {
            userEvent.type(inputBox, "43");
        });
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Entering a different right answer makes it correct.", async () => {
        render(<CheckAnswer expectedAnswer="Hello" />);
        const inputBox = screen.getByRole("textbox");
        await act(async () => {
            userEvent.type(inputBox, "Hello");
        });
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Entering a different wrong answer still makes it incorrect.", async () => {
        render(<CheckAnswer expectedAnswer="Hello" />);
        const inputBox = screen.getByRole("textbox");
        await act(async () => {
            userEvent.type(inputBox, "42");
        });
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
});
