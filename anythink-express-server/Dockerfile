FROM node:16-alpine

WORKDIR /app

# Copy package.json for dependency installation
COPY package.json package-lock.json ./

# Install production dependencies only
RUN npm ci --production

# Copy the rest of the application
COPY . .

EXPOSE 8001

# Health check using Node (not curl)
HEALTHCHECK --interval=10s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8001/health', (res) => { if (res.statusCode !== 200) throw new Error(res.statusCode) })"

CMD ["npm", "start"]
