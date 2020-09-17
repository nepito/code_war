mutants:
	yarn
	yarn workspace no_oddities_here stryker run | tee /dev/tty | grep "Survived" && exit 1 || exit 0

.PHONY: clean mutants tests

clean: 
	rm --force --recursive node_modules
	rm --force --recursive **/coverage
	rm --force --recursive **/node_modules
	rm --force --recursive **/reports
	rm --force yarn.lock
tests:
	yarn
	yarn test -u
