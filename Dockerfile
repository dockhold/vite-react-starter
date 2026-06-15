# Build the Vite app to static files
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve the static build on the port Dockhold assigns
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve@14
COPY --from=build /app/dist ./dist
# Shell form so $PORT expands at runtime
CMD serve -s dist -l $PORT
