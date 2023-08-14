# FROM node:alpine
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN npm i
# CMD ["npm", "start"]

# Start your image with a node base image
FROM node:alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./ ./

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm i

EXPOSE 3001

# Start the app using serve command
CMD [ "npm", "start" ]