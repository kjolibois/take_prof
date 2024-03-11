// src/routes/asset-calculator/+page.server.ts
import type { RequestHandler } from '@sveltejs/kit';

const initialInvestment = 100; // Example: Set your initial investment here
const assetName = 'mecoin';
const assetQuantity = 4;
const currentPrice = 80;
export const load: RequestHandler = async () => {
	try {
		// Fetch current asset value from an API (replace with your actual API call)
		//const response = await fetch('https://api.example.com/get-asset-value');
		//if (!response.ok) {
		//		throw new Error('Failed to fetch asset value');
		//	}
		//const data = await response.json();
		//const currentAssetValue = data.currentValue; // Adjust this based on your API response structure

		return {
			initialInvestment,
			assetName,
			assetQuantity,
			currentPrice
			//currentAssetValue,
		};
	} catch (error) {
		console.error('Error fetching asset value:', error);
		return {
			error: 'Failed to fetch asset value'
		};
	}
};
