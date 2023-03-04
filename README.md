# coredns

### Fedora Install
sudo dnf install nano git frr
wget https://github.com/coredns/coredns/releases/download/v1.10.1/coredns_1.10.1_linux_amd64.tgz
tar zxvf coredns_1.10.1_linux_amd64.tgz -C /usr/bin/
sudo systemctl stop systemd-resolved.service
sudo systemctl disable systemd-resolved.service
sudo rm /etc/resolv.conf
sudo systemctl restart NetworkManager
sudo mkdir /etc/coredns
sudo git clone https://github.com/thefathacker/coredns.git /etc/coredns/
sudo ln -s /etc/coredns/coredns-sysusers.conf /usr/lib/sysusers.d/
sudo ln -s /etc/coredns/coredns-tmpfiles.conf /usr/lib/tmpfiles.d/
sudo ln -s /etc/coredns/coredns.service /etc/systemd/system/
sudo useradd -m -d /var/lib/coredns coredns
sudo systemctl daemon-reload
sudo systemctl enable --now coredns.service

add contents of crontab to crontab