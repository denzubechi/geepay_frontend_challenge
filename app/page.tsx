import React from 'react';
import SalesTrend from './components/cards/SalesTrend';
import TotalCards from './components/cards/TotalCards';
import LastOrders from './components/cards/LastOrders';
import TopPlartform from './components/cards/TopPlartform';
export default function Home() {


	return (
		<>	
			<div className="lg:flex">
				<div className="lg:w-2/3">
					<SalesTrend/>
				</div>
				<div className="lg:w-2/5 lg:pl-2 mt-4 lg:mt-0">
					<TotalCards/>
				</div>
			</div>
			<div className="lg:flex">
  <div className="lg:w-2/3">
    <LastOrders />
  </div>
  <div className="lg:w-2/5 lg:pl-2 mt-4 lg:mt-0">
    <TopPlartform />
  </div>
</div>

		</>
	);
}
