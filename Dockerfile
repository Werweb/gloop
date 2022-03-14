FROM node:16-alpine
RUN mkdir -p /app
WORKDIR /app
COPY Package.json
RUN npm install
COPY . /app
RUN npm build

EXPOSE 3000

CMD ["npm", "start"]