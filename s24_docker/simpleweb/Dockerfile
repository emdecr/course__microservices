# Specify base image
FROM node:alpine

# Specify a directory
WORKDIR /usr/app

# Install dependencies
# Make sure we have access to package.json
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Setup default command
CMD ["npm", "start"]