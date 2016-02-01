console.log('============')
console.log('service init')
console.log('============')

console.log('process.env', process.env.NODE_ENV)

const app
const routes = [
  { name: 'quote', glob: '**/quote/*' },
  { name: 'health', glob: '**/health/*' }
]

console.log('routes =>', routes)
