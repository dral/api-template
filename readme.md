# API Template project

## Project setup

- [x] npm scripts for 
  - [x] prod
  - [x] start, watch
  - [x] build, clean
  - [x] test, test:watch
  - [x] lint
  - [x] license, license:report
- [x] nvm setup for node version
- [x] Typescript setup
  - [x] Linter
  - [x] Import synax
  - [x] Build scripts
  - [x] Production setup
- [x] Nodemon
  - [x] Reload on config and code changes
  - [x] Ignores tests
  - [x] Dev Tool inspect
- [x] Tests
  - [x] Jest for typescript
  - [x] Detect open handles
  - [x] Code coverage
  - [x] Supertest
- [x] Config
  - [x] Env variables support
  - [x] Defaults, dev, test & prod environment settings  
- [x] Logger
  - [x] Json output
  - [x] Api request log
- [ ] Docker file
  - [x] Incremental changes
  - [x] Test image
  - [x] Production image excluding dev dependencies
  - [ ] Private packages
- [x] CI/CD - GitHub Actions
  - [x] Linter
  - [x] Tests
  - [x] Licences audit
  - [ ] Sonarqube
  - [ ] Integration env
  - [x] Public doc to github pages
  - [x] OpenAPI doc
  - [x] Build image
  - [x] Publish image to Github packages
- [ ] Helm chart
- [ ] Server setup
  - [x] `ok` and `not found` middlewares
  - [x] error handler for uncatched and silent exceptions
  - [x] exit on initialization error
  - [x] health probe
  - [ ] prometheus metrics
  - [x] license, licenses and license summary endpoints
  - [x] API doc
    - [x] OpenAPI doc
    - [x] Development server url from config
-[x] Persistency
  - [x] Mongodb setup

```
docker network create local
```

MongoDb

```sh
docker run \
  --net local \
  -d \
  --name mongodb-dev \
  -p 27017:27017 \
  mongo:6
```