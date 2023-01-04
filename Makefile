DOCKER-RUN = docker-compose run --rm
BUNDLE-EXEC = bundle exec

build:
	$(DOCKER-RUN) web /bin/bash -c 'ci/build.sh'
test:
	$(DOCKER-RUN) web /bin/bash -c 'ci/test.sh'
spec:
	$(DOCKER-RUN) web $(BUNDLE-EXEC) rspec
guard:
	$(DOCKER-RUN) web $(BUNDLE-EXEC) guard
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
