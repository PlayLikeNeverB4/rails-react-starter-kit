# Rails React Starter Kit
### Configuration
1. Rails 5.2.2
2. Webpacker 4.0.2
3. React 16.8.4

### Installation instructions

1. Make sure you have node installed
	1. Check with `node -v`
	2. You can install it with `brew install node` or [here](https://nodejs.org)
2. Make sure you have yarn installed
	1. Check with `yarn -v`
	2. You can install it with `brew install yarn`
3. Make sure you have Postgres installed
	1. Check with `psql --version`
	2. You can install it from [here](https://postgresapp.com)
	3. Create needed databases
		1. `createdb starter_kit`
		2. `createdb starter_kit_test`
		3. You can change the names of the above databases, but make sure to keep `config/database.yml` in sync
3. Run the app initialization script `curl https://raw.githubusercontent.com/PlayLikeNeverB4/rails-react-starter-kit/master/create-rails-app | bash -s my-project-name https://github.com/my-github-username/my-project.git`
(the last argument is optional)

4. `rails s` to start up the app
5. Optionally run `./bin/webpack-dev-server` while developing.

### Tests

1. Javascript tests (Jest): `yarn run test`
2. Rails tests: `rake test`

### Deployment

You can deploy this app to heroku.

1. Set up a heroku app
2. Set up 2 buildpacks: nodejs and ruby (in that order)
3. Add a Postgres add-on
4. `heroku git:remote -a myappname`
5. `git push heroku master`
