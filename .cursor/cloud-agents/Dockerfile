FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    sudo \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

########################################################
# CONFIG UBUNTU USER
########################################################

# ensure no password authentication
RUN mkdir -p /etc/ssh/sshd_config.d && \
    echo 'PasswordAuthentication no\nChallengeResponseAuthentication no\nUsePAM no' > /etc/ssh/sshd_config.d/disable_password_auth.conf

# Create non-root user (only if it doesn't exist)
RUN id -u ubuntu &>/dev/null || useradd -m -s /bin/bash ubuntu
RUN usermod -aG sudo ubuntu
# Configure passwordless sudo for ubuntu user
RUN echo "ubuntu ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/ubuntu
# Set a password for ubuntu user
RUN echo "ubuntu:ubuntu" | chpasswd

########################################################
# PNPM + NODE
########################################################

USER ubuntu
ENV PNPM_HOME=/home/ubuntu/.local/share/pnpm
ENV PATH="${PNPM_HOME}/bin:${PNPM_HOME}:${PATH}"

RUN curl --retry 3 --retry-delay 5 -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=11 SHELL=/bin/bash sh -
RUN pnpm runtime set node 24 -g

WORKDIR /workspace
