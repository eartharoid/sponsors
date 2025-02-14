import {
	defineConfig,
	tierPresets
} from 'sponsorkit'

export default defineConfig({
	includePrivate: false,
	tiers: [
		{
			title: 'Past Sponsors',
			monthlyDollars: -1,
			preset: tierPresets.xs,
		},
		{
			title: 'Bronze Sponsors',
			preset: tierPresets.medium
		},
		{
			title: 'Silver Sponsors',
			monthlyDollars: 5,
			preset: tierPresets.large
		},
		{
			title: 'Gold Sponsors',
			monthlyDollars: 10,
			preset: tierPresets.xl,
		},
	],
	sponsorsAutoMerge: true,
	renders: [
		{
			name: 'sponsors',
			width: 800,
			formats: ['json', 'png', 'svg'],
			includePastSponsors: false,
		},
		{
			name: 'sponsors-wide',
			width: 1000,
			formats: ['json', 'png', 'svg'],
			includePastSponsors: true,
		},
		{
			renderer: 'circles',
			name: 'sponsors-circles',
			width: 800,
			formats: ['png', 'svg'],
			includePastSponsors: true,
		},
	],
})