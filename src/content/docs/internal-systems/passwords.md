---
title: Password Management System
description: How to use Bitwarden
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## What do we use?

From now on, we will use a password management system called Bitwarden (or Vaultwarden), feel free to browse their website to know more about the product and, if you need any help, please read up on the documentation available on their Help Center. There, you’ll find many resources to help you use and familiarise yourself with the product.

## How to use it?

You can go to https://bitwarden.biodata.pt and manage your password vault in your browser. However, Bitwarden is more useful when installed as a browser extension or a smartphone app. You can find information on how to download their clients here: Install and Sync All of Your Devices | Bitwarden .

## Creating an account and logging in

You should have received an email prompting you to join an organisation, following the link in that email will allow you to create an account. In the account creation process you will be prompted to choose a “Master Password”.

## The Master Password

The Master Password is a very special password in the sense that it allows access to all other passwords you’ve been assigned, or added on your own. As such it is very important that you keep it safe and private, as it allows access to all other passwords. Bitwarden can help you create secure, unique passwords for all your other accounts but the Master Password should be one a safe one that you memorise. You can write it down (preferably on a piece of paper, not electronically) and keep it somewhere safe to help you memorise it, as long as you don’t leave it somewhere where others have access to it.

<Card icon="warning" title="Your master account:">
	* It is not transmissible, i.e. it is just yours
	* Should be long and hard to guess, but easy for you to memorise
	* Cannot be recovered
</Card>

<Card icon="information" title="Need help coming up with a strong password?">
	Watch this video: [Free Security Awareness Chapter 4  - How To Create a Strong Password](https://youtu.be/TvrFpAFitQ0)
</Card>

Watch this video: Free Security Awareness Chapter 4  - How To Create a Strong Password 

## About password recoverability
Please bear in mind that your Master Password cannot be recovered. There is no such thing as a “Forgot my Password” button because that will mostly defeat the purpose of a Password Manager. This software stores the passwords on the server in an encrypted form with the decryption key being derived from your Master Password (picture that all your passwords are stored in a physical safe and you’re the only one holding the key). If you loose your Master Password, your passwords are all gone and can’t be recovered. This is to assure that even if our password database is compromised, attackers can’t recover the passwords in it. For shared passwords in organizations, they are safe from people forgetting passwords as long as one of its members has access to them.

## BioData.pt Organisation
Shared passwords are stored in an “Organisation”, which you can access by pressing “Organizations” on the top bar. They are organized into collections, for which different permissions can be set as to allow different people to access/alter passwords. When creating a new password you can choose which organisation and which collection should it be inserted into.

Please read the documentation on organisations to help you to learn more about this topic: 

Organizations | Bitwarden Help Center