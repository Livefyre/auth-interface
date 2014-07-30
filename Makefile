.PHONY: test clean

amd:
	node_modules/.bin/r.js -convert bower_components amd

install:
	npm install
	node ./node_modules/.bin/bower install
	touch $@

test: install amd
	node ./node_modules/.bin/tap test/*.js

clean:
	rm -rf bower_components node_modules amd
	-rm install
