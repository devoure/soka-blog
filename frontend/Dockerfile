FROM node:17-alpine
COPY ./sokaBlog/package.json /package.json
RUN npm install
COPY ./sokaBlog /frontend
WORKDIR /frontend
EXPOSE 3000

CMD ["npm", "run", "dev"]
