FROM registry.cn-guangzhou.aliyuncs.com/z8/nginx:1.29-alpine
COPY ./dict /usr/share/nginx/html/
