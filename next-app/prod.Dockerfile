# 1. Base image
FROM node:18-alpine

# 2. Set working dir
WORKDIR /app

# 3. Copy package files and install deps
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the project
COPY . .

# 5. Build the app
# RUN npm run build

# 6. Expose and start
EXPOSE 3000
CMD ["npm", "run", "dev"]
