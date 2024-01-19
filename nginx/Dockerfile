FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY ./ssl-certificates/certificate.crt /etc/nginx/certificate.crt
COPY ./ssl-certificates/private.key /etc/nginx/private.key
COPY ./default.conf /etc/nginx/conf.d/default.conf

