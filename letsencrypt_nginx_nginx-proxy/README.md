$ docker network create network
$ cd proxy
$ docker-compose up -d
$ cd ../test
$ echo "127.0.0.1 example.com" >> /etc/hosts
$ docker-compose up -d