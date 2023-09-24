FROM node:17-alpine
COPY ./sokaBlog/package.json /package.json
RUN npm install
COPY ./sokaBlog /frontend
WORKDIR /frontend
EXPOSE 5173

CMD ["npm", "run", "dev"]
