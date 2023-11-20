<div className='relative'>
	<select
		name='application'
		value={formValues.application}
		className={setClassName("application")}
		onChange={handleInput}
	>
		<option value='' hidden>
			Application
		</option>
		`
		{applications &&
			applications?.data?.map((size) => (
				<option key={size.id} value={size.id}>
					{size.name}
				</option>
			))}
	</select>
	<div className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700'>
		<span className='text-xl'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
			>
				<path
					d='M24 2.57143V21.4286C24 22.8482 22.8482 24 21.4286 24H2.57143C1.15179 24 0 22.8482 0 21.4286V2.57143C0 1.15179 1.15179 0 2.57143 0H21.4286C22.8482 0 24 1.15179 24 2.57143ZM4.95536 10.0982L11.5446 16.6875C11.7964 16.9393 12.2036 16.9393 12.4554 16.6875L19.0446 10.0982C19.4518 9.69107 19.1625 9 18.5893 9H5.41071C4.8375 9 4.54821 9.69107 4.95536 10.0982Z'
					fill='#1A2857'
				/>
			</svg>
		</span>
	</div>
</div>