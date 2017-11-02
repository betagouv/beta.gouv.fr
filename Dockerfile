FROM jekyll/jekyll

# --no-cache avoids to cache the index locally to reduce the image's size
RUN apk --update --no-cache add make
