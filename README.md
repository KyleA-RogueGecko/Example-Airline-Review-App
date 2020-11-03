# README

* Versioning Info
    Ruby '2.6.1'
    Rails '6.0.3.4'
    React '16.14.0'
    Node '14.13.1'

* Configuration
    If rails server is set to run on a port other than localhost:3000 the following file will need to be updated 
    cors.rb - origins variable will need to be updated to correct port

* Running it locally
    run bundle exec 
    run rails db:prepare
    run rails db:seed
    run npm install or yarn install
    run bundle exec rails s
    navigate to http://localhost:3000

* Known issues
    no error handling for when a user that does not exist attampts to log on - need to add logic to redirect to the registration component if User does not exist

* Planned work
    add styling to the Login and Register components
    link Users to Reviews 
    add functionality to allow Reviews to be edited
    add logic so that Users can only delete/edit Reviews they have created
    
