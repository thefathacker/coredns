# coredns

# Fedora Install
wget https://github.com/coredns/coredns/releases/download/v1.10.1/coredns_1.10.1_linux_amd64.tgz
tar zxvf coredns_1.10.1_linux_amd64.tgz -C /usr/bin/
sudo systemctl stop systemd-resolved.service
sudo systemctl disable systemd-resolved.service
sudo rm /etc/resolv.conf
sudo systemctl restart NetworkManager