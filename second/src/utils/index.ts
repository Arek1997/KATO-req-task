export const fetchData = async (city: string, callback: Function) => {
	const res = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
			import.meta.env.VITE_API_ID
		}`
	);
	const data = await res.json();

	callback(data);
};
