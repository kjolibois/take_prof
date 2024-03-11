<!-- src/routes/asset-calculator/+page.svelte -->
<script lang="ts">
	export let data: PageData; // Current value of assets (in dollars)
  
	let initialInvestmentInput: number;
	let assetQuantityInput: number;
	let assetNameInput: string;
	let currentPriceInput: number;
  
	// Calculate how much to sell to maintain the original investment
	let amountToSell: number;
	let purchasePricePerUnit: number;
  
	$: {
	  if (data.initialInvestment !== undefined && data.currentPrice !== undefined) {
		amountToSell = (data.currentPrice * data.assetQuantity) - data.initialInvestment;
	  }
	  purchasePricePerUnit = data.initialInvestment / data.assetQuantity;
	}
  
	function updateCalculation() {
	  if (initialInvestmentInput && assetQuantityInput && currentPriceInput) {
		data.initialInvestment = initialInvestmentInput;
		data.assetQuantity = assetQuantityInput;
		data.assetName = assetNameInput;
		data.currentPrice = currentPriceInput;
	  }
	}
  </script>
  
  <main>
	<h1>Asset Calculator</h1>
	<form on:submit|preventDefault={updateCalculation}>
	  <label>
		Initial Investment:
		<input type="number" bind:value={initialInvestmentInput} step="0.01" />
	  </label>
	  <label>
		Asset Quantity:
		<input type="number" bind:value={assetQuantityInput} step="1" />
	  </label>
	  <label>
		Asset Name:
		<input type="text" bind:value={assetNameInput} />
	  </label>
	  <label>
		Current Price:
		<input type="number" bind:value={currentPriceInput} step="0.01" />
	  </label>
	  <button type="submit">Update Calculation</button>
	</form>
  
	{#if amountToSell !== undefined}
	  <p>
		You initially invested ${data.initialInvestment} in {data.assetQuantity} {data.assetName} at {purchasePricePerUnit} per asset.
		If your asset is now worth ${data.currentPrice}, and your stock value is {data.currentPrice * data.assetQuantity},
		you should sell ${amountToSell.toFixed(2)} to stay at your original investment level. This is about {Math.floor(amountToSell.toFixed(2) / data.currentPrice)} assets.
	  </p>
	{:else}
	  <p>Loading...</p>
	{/if}
  </main>
  