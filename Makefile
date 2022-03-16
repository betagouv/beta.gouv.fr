build:
	docker-compose run --rm web /bin/bash -c 'ci/build.sh'
test:
	docker-compose run --rm web /bin/bash -c 'ci/test.sh'
up: down
	docker-compose up -d
down:
	docker-compose down
rm:
	docker-compose rm -sf
up-nginx: down-nginx
	docker-compose -f docker-compose.nginx.yml up -d
down-nginx:
	docker-compose -f docker-compose.nginx.yml down
