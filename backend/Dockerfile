# syntax = docker/dockerfile:1

ARG RUBY_VERSION=3.3.0
# ビルド引数ENVIRONMENTを追加、デフォルトをdevelopmentに設定
ARG ENVIRONMENT=development
FROM ruby:$RUBY_VERSION-slim as base
ENV APP_PATH /rails

WORKDIR $APP_PATH

COPY Gemfile $APP_PATH/Gemfile
COPY Gemfile.lock $APP_PATH/Gemfile.lock

# 必要なパッケージのインストールを一度に行い、キャッシュを有効活用
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# ENVIRONMENTがproductionの場合のみ、bundle configを実行
RUN if [ "$ENVIRONMENT" = "production" ]; then \
        bundle config set --local without 'development test'; \
    fi

# すべての環境でbundle installを実行
RUN bundle install --jobs 4 --retry 3

# アプリケーションのファイルをコピー
COPY . $APP_PATH

EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
