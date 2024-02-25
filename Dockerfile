# Stage 1: Build the Angular application
FROM node AS builder

WORKDIR /app

COPY package*.json /app
RUN npm install
RUN npm install -g @angular/cli
RUN ng build
COPY . /app
# Stage 2: Use a lighter image for the runtime
FROM nginx:alpine

# Copy the built Angular app from the builder stage
COPY /dist/myangularapp/browser /usr/share/nginx/html