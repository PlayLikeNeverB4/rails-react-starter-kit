# Rails React Starter Kit
### Configuration
1. Rails 5.2.2
2. Webpacker 3.5.5
3. React 16.6.1

### Installation instructions

1. Clone the repo `git clone --depth 1 https://github.com/PlayLikeNeverB4/rails-react-starter-kit.git myprojectname`
2. Make sure you have node installed
	1. Check with `node -v`
	2. You can install it with `brew install node` or [here](https://nodejs.org)
3. Make sure you have yarn installed
	1. Check with `yarn -v`
	2. You can install it with `brew install yarn`
4. `rails s` to start up the app
5. Optionally run `./bin/webpack-dev-server` while developing.

### Deployment

You can deploy this app to heroku.

1. Set up 2 buildpacks: nodejs and ruby (in that order)
2. Add a Postgres add-on

