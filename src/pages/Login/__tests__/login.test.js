import { render, screen } from "@testing-library/react"
import Login from "../Login"

describe("<Login/>", () => {

    render(<Login/>)
    const emailInput = screen.getByPlaceholderText(/email address/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const buttonElement = screen.getByRole("button")

    test("Email and password input should be empty", () => {
        expect(emailInput.value).toBe("")
        expect(passwordInput.value).toBe("")
    })

    
})