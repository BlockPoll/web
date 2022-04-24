# BlockPoll Web Application

BlockPoll is a blockchain-based polling application where users can create polls, cast votes on polls, view poll results and share polls. It is built on **Solana Blockchain**.

This is a pure web3 application - meaning there is no intermediate database involved. All of the poll data is stored on blockchain.

## Website

The application is live and hosted at [https://blockpoll.io](https://blockpoll.io)

## Solana on-chain program (smart contract)

The on-chain program source code is available on [GitHub](https://github.com/BlockPoll/program).

- The program is deployed on Solana `devnet` cluster.
- Program Address: [GnS5xMqf5NaY7HgbwFneyLNktT8NNNKi4rA2JEmnYdzi](https://explorer.solana.com/address/GnS5xMqf5NaY7HgbwFneyLNktT8NNNKi4rA2JEmnYdzi?cluster=devnet)

## Wallet integration

BlockPoll allows users to connect with multiple wallets - Eg: Solflare, Sollet, Phantom, etc. Users will have to connect their wallet for following operations:

- Create Poll
- Cast Vote on poll.

---

## Build and Run

Requires [NodeJs](https://nodejs.org/en/).

### Install dependencies

```sh
$ yarn install
```

### Start development server

```
$ yarn dev
```

### Environment variables

The application requires following environment variables:

- `NEXT_PUBLIC_PROGRAM_ID` - BlockPoll on-chain program address.

Create a new file `.env.local` in the root of the application and add `NEXT_PUBLIC_PROGRAM_ID=GnS5xMqf5NaY7HgbwFneyLNktT8NNNKi4rA2JEmnYdzi` (or your own self-deployed blockpoll program id) to it. That's it!

---

## Author

Authored by [Rijul Gulati](https://github.com/RijulGulati)

## Contributions

I certainly need help maintaining this. Feel free to open pull request or raise an issue.

# License

[MIT](https://github.com/BlockPoll/web/blob/main/LICENSE)

## Enjoy!
