#!/bin/sh

# Author : Michael Fitzgerald

cd /etc/coredns/
git pull -q origin main
systemctl reload coredns.service