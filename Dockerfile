FROM node:alpine
WORKDIR /app
COPY /Weather-App/package.json /app
RUN npm install
COPY ./Weather-App /app
CMD ["npm","start"]
