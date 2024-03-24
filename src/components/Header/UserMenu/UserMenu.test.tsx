import { render, screen } from "@testing-library/react";
import { UserMenu} from "./UserMenu";

describe("UserMenu component", () => {
  it("UserMenu renders",
    () => {
      render(<UserMenu />); 
      expect(screen.getByAltText('Arrow Down')).toBeInTheDocument();
    });
});
