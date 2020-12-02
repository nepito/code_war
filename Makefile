mutants:
	yarn
	yarn workspace no_oddities_here stryker run | tee /dev/tty | grep "Survived" && exit 1 || exit 0
	yarn workspace mumbling stryker run | tee /dev/tty | grep "Survived" && exit 1 || exit 0

.PHONY: clean coverage mutants tests

clean: 
	rm --force --recursive node_modules
	rm --force --recursive **/coverage
	rm --force --recursive **/node_modules
	rm --force --recursive **/reports
	rm --force yarn.lock

coverage:
	yarn && yarn jest --coverage && ./node_modules/.bin/codecov --token="419ec4bc-f302-42f1-8c6f-b5a2ca58c04f"

tests:
	yarn
	yarn test -u
