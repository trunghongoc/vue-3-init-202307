import { setupWorker } from 'msw'
import { handlers } from './handlers'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)

export const startBrowserMsw = () => {
  worker.start({
    onUnhandledRequest: 'bypass',
    quiet: true
    /*
    onUnhandledRequest: (req) => {
      // specify routes to exclude
      const excludedRoutes = ['/node_modules/', '/assets/', '/@vite/']

      // check if the req.url.pathname contains excludedRoutes
      const isExcluded = excludedRoutes.some((route) => req.url.pathname.includes(route))

      if (isExcluded) {
        return
      }
    },
    */
  })
}
