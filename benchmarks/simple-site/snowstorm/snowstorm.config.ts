import { SnowstormConfig } from '@snowstorm/core/server';
import { Plugin as VitePluginFonts } from 'vite-plugin-fonts';

export const Config: SnowstormConfig = {
	site: {
		build: {
			plugins: [
				VitePluginFonts({
					google: {
						families: ['Inter'],
					},
				}),
			],
		},
	},
};
