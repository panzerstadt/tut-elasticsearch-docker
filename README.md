# dev

`docker-compose up`

## does not rebuild

you need to `docker-compose up --build` to see changes to `/backend`

# deploy (locally)

- `docker tag node-elasticsearch-api tangliqun/node-elasticsearch-api`
- `docker login docker.io`
- restart terminal
- `docker-compose push tangliqun/node-elasticsearch-api`
- `docker swarm init` / `docker swarm join`
- `docker stack deploy`
- you should now be able to hit localhost:3000 for stuff

ref: https://docs.docker.com/engine/swarm/stack-deploy/
