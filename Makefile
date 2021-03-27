deps-install:
	cd client && npm ci
	cd server && npm ci

start:
	npm run start

.PHONY: test
