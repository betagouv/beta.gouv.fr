build:
	docker-compose run --rm web /bin/bash -c 'ci/build.sh'
up:
	docker-compose up
down:
	docker-compose down
rm:
	docker-compose rm
