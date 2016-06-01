FROM phusion/baseimage:0.9.18

# Baseimage's init script
CMD /sbin/my_init

# Install required packages
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update -qq && \
    yes '' | apt-get upgrade -y -o DPkg::options::='--force-confdef' -o Dpkg::Options::='--force-confold' && \
    yes '' | apt-get install -y autoconf automake bison build-essential curl gawk git-core jq libffi-dev \
      libgdbm-dev libgmp-dev libncurses5-dev libreadline6-dev libsqlite3-dev libssl-dev libtool \
      libxslt1-dev libxml2-dev libyaml-dev pkg-config sqlite3 zlib1g-dev nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Configure app folder
ENV APP_HOME /app

RUN mkdir $APP_HOME

WORKDIR $APP_HOME

# Get current production versions
RUN curl https://pages.github.com/versions.json > /tmp/pages-versions.json
RUN cat /tmp/pages-versions.json | jq -r '.ruby' > /tmp/.ruby-version
RUN cat /tmp/pages-versions.json | jq -r '.["github-pages"]' > /tmp/.gh-pages-version

# Install RVM
RUN curl -sSL https://rvm.io/mpapis.asc | gpg --import -
RUN curl -sSL https://get.rvm.io | bash -s stable
RUN echo 'source /usr/local/rvm/scripts/rvm' >> /etc/bash.bashrc
RUN /bin/bash -l -c 'rvm install $(cat /tmp/.ruby-version)'
RUN /bin/bash -l -c 'rvm use $(cat /tmp/.ruby-version)@global --default'

# Install app dependencies
RUN /bin/bash -l -c 'gem install --no-document \
  github-pages:$(cat /tmp/.gh-pages-version) \
  jekyll-github-metadata'

# Run the app
CMD /bin/bash -l -c 'jekyll serve --watch --force_polling -H 0.0.0.0 -P 4000'
