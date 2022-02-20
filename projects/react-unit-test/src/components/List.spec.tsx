import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import useEvent from "@testing-library/user-event";
import List from "./List";

describe("List Component", () => {
  it("should render list items", () => {
    const { rerender, unmount } = render(
      <List initialItens={["Diego", "Rodz", "Mayk"]} />
    );

    expect(screen.getByText("Diego")).toBeInTheDocument();
    expect(screen.getByText("Rodz")).toBeInTheDocument();
    expect(screen.getByText("Mayk")).toBeInTheDocument();

    unmount()
    rerender(<List initialItens={["Julia", "carlos"]} />);

    expect(screen.getByText("Julia")).toBeInTheDocument();
    expect(screen.queryByText("Mayk")).not.toBeInTheDocument();
  });



  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <List initialItens={[]} />
    );

    const input = getByPlaceholderText("New item");
    const addButton = getByText("Adicionar");

    useEvent.type(input, "Novo");

    useEvent.click(addButton);

    expect(await findByText("Novo")).toBeInTheDocument();
  });

  it("should be able to add remove new item to the list", async () => {
    const { getByText, getAllByText, findByText } = render(
      <List initialItens={["Diego"]} />
    );

    // const addButton = getByText('Adicionar');
    const removeButtons = getAllByText("Remover");

    useEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return getByText("Diego");
    });
  });
});

export {};
