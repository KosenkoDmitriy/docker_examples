* Create a dummy certificate, start nginx, delete the dummy and request the real certificates
$ curl -L https://raw.githubusercontent.com/wmnnd/nginx-certbot/master/init-letsencrypt.sh > init-letsencrypt.sh
change domain and email
$ chmod +x init-letsencrypt.sh
$ sudo ./init-letsencrypt.sh --staging 1

