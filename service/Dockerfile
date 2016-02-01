FROM mhart/alpine-node

RUN mkdir /src

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD /app/package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

RUN npm install -g nodemon

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /src
ADD app/package.json /src/package.json
RUN npm install

# ADD app/nodemon.json /src/nodemon.json

EXPOSE 8080

CMD npm run dev
# RUN chmod +x /app/run.sh
# CMD ["/app/run.sh"]
