# Blockchain Supply Chain Solution

## Description

This project aims to solve the problem of tracking the full supply chain from the production of the coffee beans to the consumer hands.

This document uses UML to describre the general structure and functions that this Smart Contract offers to the actors:

- Farmers
- Distributors
- Retailers
- Consumers

# Activity Diagram

This diagram shows the different actors and the interactions with the system.

![Activity Diagram](https://github.com/axelgalicia/blockchain-supply-chain/blob/master/project-6/images/activity_diagram_final.png)


# Sequence Diagram

This diagram shows the communication between the different objects and their life cycle.

![Sequence Diagram](https://github.com/axelgalicia/blockchain-supply-chain/blob/master/project-6/images/sequence_diagram3.png)

# State Diagram

This diagram shows the different states of each object and the events or conditions that change those states.

![State Diagram](https://github.com/axelgalicia/blockchain-supply-chain/blob/master/project-6/images/state_diagram_final.png)

# Data Modeling Diagram

This diagram shows the different Smart Contracts and the relation between them

![Data Modeling Diagram](https://github.com/axelgalicia/blockchain-supply-chain/blob/master/project-6/images/data_modeling_diagram.jpg)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/axelgalicia/blockchain-supply-chain/tree/master/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "siege disagree message lake agree between walk confirm engage survey chicken become"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

Axel Galicia

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS


