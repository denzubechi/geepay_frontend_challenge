import React from 'react';
import SalesTrend from './components/cards/SalesTrend';
import TotalCards from './components/cards/TotalCards';
import LastOrders from './components/cards/LastOrders';
import TopPlartform from './components/cards/TopPlartform';
export default function Home() {


	return (
		<>
			<SalesTrend/>
			<div className="lg:flex">
				<div className="lg:w-2/3">
					<LastOrders />
				</div>
				<div className="lg:w-1/3 lg:pl-2 mt-4 lg:mt-0">
					<TopPlartform />
				</div>
			</div>
		</>
	);
}
