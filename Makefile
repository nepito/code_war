mutants:
	yarn
	yarn workspace mumbling stryker run | tee /dev/tty | grep "Survived" && exit 1 || exit 0

.PHONY: clean mutants tests

clean: 
	rm --force --recursive node_modules
	rm --force --recursive mumbling/coverage
	rm --force --recursive mumbling/node_modules
tests:
	yarn
	yarn test -u
