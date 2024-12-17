# Stage 1: Build dependencies
FROM node:22-alpine AS builder
WORKDIR /App
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
RUN npm cache clean --force


# Stage 2: Final image
FROM node:22-alpine
WORKDIR /App
COPY --from=builder /App /App
EXPOSE 3000
CMD [ "npm", "run", "start" ]

