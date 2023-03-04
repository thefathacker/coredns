# coredns

### Fedora Install - CoreDNS
sudo dnf install nano git
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
sudo chmod +x /etc/coredns/cron.sh

add contents of crontab to crontab

### Fedora Install - FRR
sudo dnf install -y frr
sudo sed -i 's/ospfd=no/ospfd=yes/' /etc/frr/daemons
sudo sed -i 's/ospf6d=no/ospf6d=yes/' /etc/frr/daemons
sudo systemctl restart frr.service

sudo vtysh
configure terminal
router-id [LANIPADDR]
interface lo
ip address 192.168.0.0/32
ipv6 address fdff::/128
ip ospf area 172.31.0.0
exit
interface ens192
ip ospf network broadcast
ip ospf area 172.31.0.0
exit
router ospf
ospf router-id 172.31.0.0
exit
write memory
exit

Allow OSPF on Firewall