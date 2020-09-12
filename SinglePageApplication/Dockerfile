# Declare which version of Docker's node image to use
FROM node:14.10

# Specify working directory
WORKDIR /usr/src/app

# Copy node-package-information to docker container
COPY package*.json /usr/src/app/
# Install custom node dependencies
RUN npm install

# Copy project to docker container
COPY . /usr/src/app/
#VOLUME . /usr/src/app/      # Doesn't work for some reason

# Make port publicly available
EXPOSE 5060

# Start node application (=web server)
CMD ["node", "server.js"]

# Open terminal in: single_page_application/SinglePageApplication
# Build: docker build -t docker-spa .
# Start (without mounting a volume): docker run -it -p 5060:5060 docker-spa:latest
# Start (mounting volume for hot reload): docker run -it -p 5060:5060 -v $(pwd)/:/usr/src/app/ docker-spa:latest