import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
	includePrivate: false,
	// formats: ['json', 'svg', 'png'],
	tiers: [
		{
			title: '🥲 Past Sponsors',
			monthlyDollars: -1,
			preset: presets.xs,
		},
		{
			title: '🥉 Bronze Sponsors',
			preset: presets.small
		},
		{
			title: '🥈 Silver Sponsors',
			monthlyDollars: 3,
			preset: presets.base
		},
		{
			title: '🥇 Gold Sponsors',
			monthlyDollars: 5,
			preset: presets.medium,
		},
		{
			title: '🏆 Platinum Sponsors',
			monthlyDollars: 7,
			preset: presets.large,
		},
		{
			title: '💎 Diamond Sponsors',
			monthlyDollars: 10,
			preset: presets.xl,
		},
	],
})