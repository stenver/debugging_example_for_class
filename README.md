Example debugging application
=====================================

# Flavor

This application will give you wise words, if you press a button

# Intent
This application is a demonstration of debugging. It contains many intentional bugs, among which

1. If you run the application and click button on the root page long enough, then the server will start throwing index out of range exceptions

2. If you reload the page after you have already asked for some wise words, then there are 2 errors

* The wise words index is < 7 and but you will not get all the wise words, only 1 of a kind

* The wise words index is >= 7 and none of the wise words are loaded because of list index out of bound exception

# How to run

Install play 2.2

Run the following commands
```
git clone git@github.com:stenver/debugging_example_for_class.git
cd debugging_example_for_class
play
run
```
After that navigate to [localhost:9000](http://localhost:9000)
