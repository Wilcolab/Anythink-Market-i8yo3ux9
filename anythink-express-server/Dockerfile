FROM node:14

WORKDIR /app

# Copy both package.json AND yarn.lock for deterministic installs
COPY package.json yarn.lock ./

# Install only production deps (no dev tools like nodemon)
RUN yarn install --production

# Copy rest of the app
COPY . .

EXPOSE 8001

CMD ["node", "src/app.js"]
