FROM node:18
ENV APP_PATH /react

WORKDIR $APP_PATH

COPY package.json /$APP_PATH/package.json
COPY yarn.lock $APP_PATH/yarn.lock

RUN yarn install

COPY . $APP_PATH
CMD ["yarn", "start"]
