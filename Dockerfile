FROM node:10

VOLUME ['/code']

COPY . /code
WORKDIR /code

ENTRYPOINT ['/code']
CMD [ 'npm start' ]