import { render, screen } from "@testing-library/react";
import Song from "components/Song";
import React from "react";

describe("Search", () => {
    test("MSW API", () => {
        render(
            <Song
                uri={""}
                image={""}
                title={""}
                album={""}
                selectState={function (uri: string): void {
                    throw new Error("Function not implemented.");
                }}
                isSelected={false}
            />
        );
        const checkData = screen.findByText("SeachParams");
        expect(checkData).toBeInTheDocument;
    })
})