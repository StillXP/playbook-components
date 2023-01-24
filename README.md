# Setup Guide

## Navigating your file system through the command line

Open terminal and navigate to an accessible directory for the code to live by doing the following:

Use the `ls` command to view the current directory contents:

<img width="535" alt="Screen Shot 2023-01-24 at 3 48 09 PM" src="https://user-images.githubusercontent.com/87870902/214408293-9bf1f85d-14e1-4130-9c93-430d65b1bf76.png">



Enter a directory by using the `cd {directory-name}` command:

<img width="269" alt="Screen Shot 2023-01-24 at 3 50 08 PM" src="https://user-images.githubusercontent.com/87870902/214409023-298c69c1-3ea4-4851-9d22-49cb8ab95e86.png">



If you'd like to create a new directory, use the `mkdir {directory-name}` command then cd into that new directory.

<img width="348" alt="Screen Shot 2023-01-24 at 3 52 23 PM" src="https://user-images.githubusercontent.com/87870902/214409838-568bc251-2d87-4aec-b780-ad9c9e3ae13d.png">

## Cloning the repository

Run the following command to clone the repo into your selected directory:

`git clone https://github.com/StillXP/playbook-components`

<img width="626" alt="Screen Shot 2023-01-24 at 4 00 37 PM" src="https://user-images.githubusercontent.com/87870902/214412790-aeb5e006-6f83-476a-b6c0-b701850d6c5e.png">

You can run another `ls` command to verify that the repo was cloned into the directory:

<img width="250" alt="Screen Shot 2023-01-24 at 4 01 31 PM" src="https://user-images.githubusercontent.com/87870902/214413113-373089cd-ca5e-4aae-88c9-2bf82518ab57.png">

Next, `cd` into your newly cloned repo and use `ls` to take a look around!

<img width="1084" alt="Screen Shot 2023-01-24 at 4 05 30 PM" src="https://user-images.githubusercontent.com/87870902/214414523-b59e1b6e-d995-4975-ac3b-ab58d47ab7dc.png">

## Deploying the local Storybook environment

We have to take care of a few things before launching the Storybook environment.

### Managing Node with NVM

At the moment, version 16 of Node is required for this to work properly. Installation will fail without the proper version:

<img width="626" alt="Screen Shot 2023-01-24 at 4 15 41 PM" src="https://user-images.githubusercontent.com/87870902/214418047-b7c033c0-3b60-466b-9aa5-6730c9479264.png">

We'll need to install Node Version Manager (NVM) to obtain this version. 

If you don't have it, install NVM with the following command:

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`

Once installed, run the following command to install version 16 of Node:

`nvm install 16`

We can see our installed versions of Node by running `nvm ls`

<img width="351" alt="Screen Shot 2023-01-24 at 4 22 37 PM" src="https://user-images.githubusercontent.com/87870902/214419297-4a206d38-d8fe-4a5c-9da5-1d3a805b7957.png">

Next, we'll change our running version of Node to 16 by running `nvm use 16`:

<img width="380" alt="Screen Shot 2023-01-24 at 4 25 45 PM" src="https://user-images.githubusercontent.com/87870902/214420554-f946821a-e54a-478f-8b96-8553b19cf631.png">

Wooo!

### Installing Dependencies

After we have our Node version taken care of, we need to install all of the required dependencies by running `npm install`

It may look like the world is burning but everything is okay!

<img width="634" alt="Screen Shot 2023-01-24 at 4 27 10 PM" src="https://user-images.githubusercontent.com/87870902/214421402-54a9162b-b3cd-45b5-bff5-85c48ca5c762.png">


### Running Storybook

We're now ready run the local Storybook environment!

Run `npm run storybook` and the environment will begin to build.

<img width="897" alt="Screen Shot 2023-01-24 at 4 31 12 PM" src="https://user-images.githubusercontent.com/87870902/214424190-ac45b19f-c812-4024-840c-7a7c548c62e0.png">

Once completed, Storybook should open automatically in your browser!

<img width="857" alt="Screen Shot 2023-01-24 at 4 32 16 PM" src="https://user-images.githubusercontent.com/87870902/214424730-d38f1525-830d-43d8-ae2e-ca6ae3799076.png">

