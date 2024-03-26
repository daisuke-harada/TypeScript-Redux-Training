# syntax = docker/dockerfile:1

ARG RUBY_VERSION=3.3.0
FROM ruby:$RUBY_VERSION-slim as base
ENV APP_PATH /rails

WORKDIR $APP_PATH

COPY Gemfile Gemfile.lock ./
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev && \
    bundle install

COPY . .

EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]