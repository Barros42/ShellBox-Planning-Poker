FROM node:alpine

WORKDIR /src

COPY . ./app

WORKDIR /src/app

ENV PORT=8080

EXPOSE 8080

RUN yarn install

RUN yarn global add serve

RUN npx react-scripts build

CMD ["serve", "-s", "build"]
