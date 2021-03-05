FROM node:alpine

WORKDIR /src

COPY . ./app

WORKDIR /src/app

RUN yarn install

RUN yarn build

RUN yarn global add serve

ENV PORT=8080

EXPOSE 8080

CMD ["serve", "-s", "build"]
