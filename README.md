# car-lovers-graphql-lambda
Graphql endpoint hosted on aws lambda

# install
npm i

# run server locally
npm run dev

# Sample endpoints to test
http://localhost:4500/
http://localhost:4500/graphql

# Sample query
```
query AllMakes {
	AllMakes{
    id,
    name,
    models{
      name,
      price,
      id
    }
  }
}
```
