#!/bin/sh

# Author : Michael Fitzgerald

cd /etc/coredns/
git pull -q origin main
chmod +x /etc/coredns/cron.sh
systemctl reload coredns.service