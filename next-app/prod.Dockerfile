# dev.Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

# Don't copy source, we mount it in volumes
EXPOSE 3000
CMD ["npm", "run", "dev"]
