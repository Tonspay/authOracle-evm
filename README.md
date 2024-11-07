# Auth Oracle 

This repo is to try build a social media account auth system onchain , support anyone to verfiy user's web2 social media account information onchain . 

It's similar to chainlink Oracle . So we name it `Auth-Oracle` .

## What to achive ?

An oracle contract to verfiy input data with web2 social media account .

- Telegram (webapp auth)

- Telegram (Oauth)

- Facebook login 

- Twitter login

- Google login

## How to achive ?

Different social media have different auth logic . some of them can done fully decentralized . 

Some of them have to reconsider to did via web2.5 or oracle bridges silimar to chainlink VRF.

- Telegram (webapp auth)
    - Base on HMAC-Sha256 . Fully onchain auth

- Others
    - Requir web2 callback-reciver 
    - Oracle update 

## It is a Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
