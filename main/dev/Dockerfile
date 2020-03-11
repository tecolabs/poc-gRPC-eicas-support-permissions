FROM devops01.incubator.com:5000/com.telecom.eicas-nodejs10.9

MAINTAINER Devops IT "devops"

RUN unlink /etc/localtime
RUN ln -s /usr/share/zoneinfo/America/Argentina/Buenos_Aires /etc/localtime

# Install PM2
RUN npm install -g pm2

RUN pm2 dump
# dump will start pm2 daemon and create everything needed
# Create app directory
RUN mkdir -p /home/jenkins/app
WORKDIR /home/jenkins/app

# Install app
COPY aei-eicas-utn-support-permissions.tar.bz2 /home/jenkins/app/
RUN tar -jxvf aei-eicas-utn-support-permissions.tar.bz2 --strip=1 -C .

RUN npm rebuild

EXPOSE 50051

CMD ["pm2", "start", "/home/jenkins/app/app.js", "--no-daemon"]
