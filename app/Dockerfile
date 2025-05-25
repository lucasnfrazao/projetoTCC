# Use Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose port 4000
EXPOSE 4000

# Start the application
CMD ["npm", "run", "dev"]