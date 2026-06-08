import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // iCloud Drive上のプロジェクトはキャッシュを外部に逃がすことで
  // 同期タイミングによるタイムアウトを防ぐ
  cacheDir: '/tmp/.vite-rin-portfolio',
  server: {
    // FSEventsはiCloud Drive上で不安定なためポーリングへ切替
    watch: {
      usePolling: true,
      interval: 500,
    },
  },
})
