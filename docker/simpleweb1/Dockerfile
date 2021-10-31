# Install a base image
FROM node:alpine

WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
RUN yarn
COPY ./ ./

# Default command
CMD ["yarn", "start"]