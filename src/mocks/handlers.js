import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', {
    user: 'abcd'
  }),

  // Handles a GET /user request
  rest.get('/user', {
    user: 'abcd1'
  }),

  rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([1, 2, 3]))
  }),
  rest.get('https://jsonplaceholder.typicode.com/todos/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json('ahihi_dongock_res'))
  })
]
