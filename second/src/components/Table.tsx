interface Props {
	dt_txt: string;
	humidity: number;
	temp: number;
}

const Table = ({ dt_txt, humidity, temp }: Props) => {
	return (
		<div className='flex flex-col overflow-hidden my-10 border-2'>
			<div className='-m-1.5 overflow-x-auto'>
				<div className='p-1.5 min-w-full inline-block align-middle'>
					<div className='overflow-hidden'>
						<table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
							<thead>
								<tr>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'
									>
										dt_txt
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'
									>
										humidity
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'
									>
										temp
									</th>
								</tr>
							</thead>
							<tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
								<tr>
									<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
										{dt_txt}
									</td>
									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
										{humidity}
									</td>
									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
										{temp}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Table;
