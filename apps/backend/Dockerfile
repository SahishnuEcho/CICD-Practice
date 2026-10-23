FROM node:24-alpine AS build
WORKDIR /apps/backend

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:24-alpine
WORKDIR /apps/backend
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --omit=dev

COPY --from=build /apps/backend/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main"]
