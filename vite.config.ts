import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh()],
	resolve: {
		alias: {
			"@components": resolve(__dirname, "src/components"),
			"@store": resolve(__dirname, "src/store"),
		},
	},
})
