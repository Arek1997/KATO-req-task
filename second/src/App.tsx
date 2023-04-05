import { useEffect, useState } from 'react';
import { TIME_TO_RE_EXECUTE_IN_MILLISECONDS } from './constans';
import { fetchData } from './utils';
import Table from './components/Table';

interface Data {
	list: [
		{
			dt_txt: string;
			main: {
				humidity: number;
				temp: number;
			};
		}
	];
}

function App() {
	const [data, setData] = useState<Data>();
	const [selectedCity, setSelectedCity] = useState('');

	useEffect(() => {
		if (!selectedCity) return;
		fetchData(selectedCity, setData);

		const interval = setInterval(() => {
			fetchData(selectedCity, setData);
		}, TIME_TO_RE_EXECUTE_IN_MILLISECONDS);

		return () => clearInterval(interval);
	}, [selectedCity]);

	return (
		<>
			<label htmlFor='city-select' className='text-slate-200 mr-5'>
				Choose City and get some data from it.
			</label>
			<select
				id='city-select'
				defaultValue='default'
				onChange={(e) => setSelectedCity(e.target.value)}
			>
				<option disabled value='default'>
					Choose City
				</option>
				<option value='london'>London</option>
				<option value='münchen'>München</option>
			</select>

			{data && (
				<Table
					dt_txt={data?.list[0].dt_txt}
					humidity={data?.list[0].main.humidity}
					temp={data?.list[0].main.temp}
				/>
			)}
		</>
	);
}

export default App;
