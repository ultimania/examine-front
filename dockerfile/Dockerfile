FROM centos
LABEL maintainer="Ultimania <yng.ultimania.gmail.com>"
WORKDIR /root

# OS Packagesインストール
ENV APP_NAME="myapp"
ENV BASE_DIR="/opt"

RUN set -x && \
    dnf -y install epel-release && \
    dnf -y install nodejs npm

RUN set -x && \
    cd ${BASE_DIR} && \
    npx create-react-app ${APP_NAME} && \
    cd ${APP_NAME}

# DBの同期, API Server起動
CMD [ "/bin/sh" , "npm start"]
