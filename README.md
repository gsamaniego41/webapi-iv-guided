# Heroku Continuous Deployment

#### Steps

\* Prerequisite - Sign up for a [heroku](https://www.heroku.com/) free account.

1. Click 'New' > 'Create new app'
2. Deployment method > Click on 'GitHub'
3. 'Connect to GitHub' > search the name of the repository you want to deploy
4. Click 'Connect'
5. Authorize Heroku - click 'Approve'
6. 'Automatic deploys' > Click 'Enable Automatic Deploys'
7. 'Manual deploy' > Click 'Deploy branch'
8. Click 'Overview' tab to see deployment progress
9. Click 'Open app' to preview your app

\* To spot errors, click 'More' > View logs

#### Make sure to check your:

1. package.json

   - scripts: `"start": "nodemon index.js"`
   - dependencies: make sure you have `dotenv`
   - `yarn remove node` if it's one of your dependencies

2. GitHub repo

   - If you preview your app and see an application error, it usually means you haven't pushed to GitHub

3. Heroku

   - Make sure you are deploying from the correct branch
   - Force deploy by clicking 'Deploy branch' again

#### To overwrite environment variables

1. Hit the 'Settings' Tab
2. Click 'Reveal config vars'
3. Enter key/value pairs you want to overwrite
4. Click 'Add'
