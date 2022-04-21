import Song from "components/Song";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

const renderSong = (
    <Song
        uri="testimage"
        image="testimage"
        title="Beatles"
        album="Jude"
        selectState={function (uri: string): void {
            throw new Error("Function not implemented.");
        }}
        isSelected={false}
    />
);

describe("Song", () => {
    test("Song Image Rendered", () => {
        render(renderSong);
        const songImage = screen.findByTestId("imageSong");
        expect(songImage).toBeInTheDocument;
    });

    test("Song Title Rendered", async () => {
        render(renderSong);
        const songTitle = screen.findByTestId("titleSong");
        expect((await songTitle).textContent).toBe("Beatles");
    });

    test("Song Album Rendered", async () => {
        render(renderSong);
        const songAlbum = screen.findByTestId("albumSong");
        expect((await songAlbum).textContent).toBe("Jude");
    });

    test("Song Button Rendered", async () => {
        render(renderSong);
        const songButton = screen.findByTestId("buttonSong");
        expect((await songButton).textContent).toBe("SELECT");
    });
});
