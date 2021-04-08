import {act, cleanup, screen, render, waitFor} from "@testing-library/react";
import mockedAxios from "axios";
import TwitterCard from "../components/TwitterCard";

jest.mock("axios");

describe("Twitter component", () => {
	afterEach(cleanup);

	var response = {
		data: {
			id: 23,
			avatar: "image.png",
			name: "Dummy name",
			comment: "This is some dummy text"
		}
	};

	it("Displays correct image", async () => {
		mockedAxios.get.mockResolvedValue(response);
		act(() => {
			render(
				<TwitterCard avatar={response.data.avatar} name={response.data.name}>
					{response.data.comment}
				</TwitterCard>
			);
		});

		await waitFor(() => {
			var imgTag = screen.getAllByText(
				(content, element) => element.tagName.toLowerCase() === "img"
			)[0];
			expect(imgTag).toBeInTheDocument();
			expect(imgTag.src).toBe("http://localhost/image.png");
		});
	});

	it("Displays correct text", async () => {
		mockedAxios.get.mockResolvedValue(response);
		act(() => {
			render(
				<TwitterCard avatar={response.data.avatar} name={response.data.name}>
					{response.data.comment}
				</TwitterCard>
			);
		});

		await waitFor(() => {
			var text = screen.getAllByText(/This is some dummy text/i)[0];
			expect(text).toBeInTheDocument();
		});
	});

	it("Displays correct name", async () => {
		mockedAxios.get.mockResolvedValue(response);
		act(() => {
			render(
				<TwitterCard avatar={response.data.avatar} name={response.data.name}>
					{response.data.comment}
				</TwitterCard>
			);
		});

		await waitFor(() => {
			var name = screen.getAllByText(/Dummy name/i)[0];
			expect(name).toBeInTheDocument();
		});
	});
});
