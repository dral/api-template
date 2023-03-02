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
  - [ ] Liveness probe
- [ ] Docker file
  - [x] Incremental changes
  - [x] Test image
  - [ ] Production image excluding dev dependencies
  - [ ] Private packages
- [ ] CI/CD - GitHub Actions
  - [ ] Linter
  - [ ] Tests
  - [ ] Build image
  - [ ] Licences audit
  - [ ] Sonarqube
  - [ ] Integration env
  - [ ] Swagger doc
- [ ] Helm chart
- [ ] Server setup
  - [x] `ok` and `not found` middlewares
  - [x] error handler for uncatched and silent exceptions
  - [x] exit on initialization error
  - [ ] health probe
  - [ ] prometheus metrics
  - [x] license, licenses and license summary endpoints
  - [x] API doc
    - [x] OpenAPI doc
    - [x] Development server url from config