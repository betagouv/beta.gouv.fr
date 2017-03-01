install: ## Installe ou met à jour les dépendances du site
	command -v bundler >/dev/null 2>&1 || gem install bundler --no-ri --no-rdoc
	bundle install

run: ## Lance le site avec un serveur local
	bundle exec jekyll serve

.PHONY: install run
