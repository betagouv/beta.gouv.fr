FROM ruby:3.3.4-slim

RUN apt-get update && apt-get install -y --no-install-recommends nodejs npm build-essential

# minimise rebuilds by isolating Bundler and its files
WORKDIR /bundler
COPY Gemfile.lock Gemfile .
RUN bundle install

# idem for NPM, except we have to be in the app folder because our
# Jekyll server needs to copies some assets from node_modules at
# runtime (see the `copy_to_dest` targets in the _config.yml file)
WORKDIR /app
COPY package.json package-lock.json .
RUN npm i

# only then, copy the rest of the app and boot
COPY . .

# server
EXPOSE 4000

# livereload
EXPOSE 35729

CMD ["bundle", "exec", "jekyll","serve","--incremental","--host","0.0.0.0","--livereload"]
