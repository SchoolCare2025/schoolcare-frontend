import { callApi } from "@zayne-labs/callapi";

const callNigeriaApi = callApi.create({
	baseURL: "https://nigeria-states-towns-lgas.onrender.com/api",
	resultMode: "onlySuccess",
	throwOnError: true,
});

export type State = {
	capital: string;
	creation_date: string;
	location: Location;
	name: string;
	population: number | null;
	postal_code: number | null;
	religions: string[];
	state_code: string;
	total_area: string | null;
};

export type LGA = {
	creation_date: null;
	location: Location;
	name: string;
	population: null;
	postal_code: null;
	total_area: null;
};

type Location = {
	latitude: null;
	longitude: null;
};

export { callNigeriaApi };
