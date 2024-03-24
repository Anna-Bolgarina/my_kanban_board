import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  it("Header renders",
    () => {
      render(<Header />);

      expect(screen.getByText('Awesome Kanban Board')).toBeInTheDocument();
      
    });
});
