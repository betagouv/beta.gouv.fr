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
dsl:
	$(DOCKER-RUN) web ./bin/beta-rb
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

html-proofer:
	bundle exec htmlproofer ./_site/ --ignore-files "/recrutement\/*/" --no-enforce-https --disable-external --root_dir _site/

.PHONY: validate
validate:
	ruby bin/validate schema/authors.yml "content/_authors/*.md"
	ruby bin/validate schema/startups.yml "content/_startups/*.md"
	ruby bin/validate schema/organisations.yml "content/_organisations/*.md"
