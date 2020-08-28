mutants:
	yarn
	yarn workspace no_oddities_here stryker run | tee /dev/tty | grep "Survived" && exit 1 || exit 0

.PHONY: clean mutants tests

clean: 
	rm --force --recursive node_modules
	rm --force --recursive no_oddities_here/coverage
	rm --force --recursive no_oddities_here/node_modules
tests:
	yarn
	yarn test -u
