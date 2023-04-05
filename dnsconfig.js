// Providers:

var REG_NONE = NewRegistrar('none');    // No registrar.
var DNS_BIND = NewDnsProvider('bind');  // ISC BIND.

// Domains:

var NSSERVERS = [
    NAMESERVER('dns-primary.thefathacker.net.'),
    NAMESERVER('dns-secondary.thefathacker.net.')
];

D(REV('192.168.0.0/16'), REG_NONE, DnsProvider(DNS_BIND), NSSERVERS, 
    PTR('192.168.0.0', 'dns-primary.thefathacker.net.'),
    PTR('192.168.255.0', 'dns-secondary.thefathacker.net.'),
    PTR('192.168.64.2', 'pf-au1fw-3.thefathacker.net.')
);
D(REV('fdff::/48'), REG_NONE, DnsProvider(DNS_BIND), NSSERVERS, 
    PTR('fdff::', 'dns-primary.thefathacker.net.'),
    PTR('fdff:0:0:0:ff::', 'dns-secondary.thefathacker.net.'),
    PTR('fdff:0:0:0:40::2', 'pf-au1fw-3.thefathacker.net.')
);
D(REV('172.31.0.0/16'), REG_NONE, DnsProvider(DNS_BIND), NSSERVERS, 
    PTR('172.31.0.0', 'pf-au1fw-3.thefathacker.net.'),
    PTR('172.31.0.1', 'rb-au1ro-1.thefathacker.net.'),
    PTR('172.31.0.2', 'rb-au1ro-1.thefathacker.net.'),
    PTR('172.31.0.3', 'pf-au1fw-1.thefathacker.net.'),
    PTR('172.31.0.4', 'pf-au1fw-2.thefathacker.net.'),
    PTR('172.31.1.1', 'vrrp-gateway.thefathacker.net.'),
    PTR('172.31.1.2', 'es-au1sw-2.thefathacker.net.'),
    PTR('172.31.1.3', 'esx-au1vh-3.thefathacker.net.'),
    PTR('172.31.1.4', 'es-au1sw-1.thefathacker.net.'),
    PTR('172.31.1.5', 'eng-au1wa-1.thefathacker.net.'),
    PTR('172.31.1.6', 'tp-au1sw-3.thefathacker.net.'),
    PTR('172.31.1.8', 'truenas-au1sa-3.thefathacker.net.'),
    PTR('172.31.1.9', 'truenas-au1sa-2.thefathacker.net.'),
    PTR('172.31.1.63', 'esx-au1vh-11.bmc.thefathacker.net.'),
    PTR('172.31.1.64', 'esx-au1vh-11.thefathacker.net.'),
    PTR('172.31.1.240', 'pf-au1fw-1.thefathacker.net.'),
    PTR('172.31.1.241', 'pf-au1fw-2.thefathacker.net.'),
    PTR('172.31.2.1', 'pf-au1fw-3.thefathacker.net.'),
    PTR('172.31.2.5', 'pf-au1fw-3.thefathacker.net.'),
    PTR('172.31.2.9', 'pf-au1fw-1.thefathacker.net.'),
    PTR('172.31.2.13', 'pf-au1fw-1.thefathacker.net.'),
    PTR('172.31.2.17', 'pf-au1fw-2.thefathacker.net.'),
    PTR('172.31.2.21', 'pf-au1fw-2.thefathacker.net.'),
    PTR('172.31.16.1', 'vrrp-gateway.thefathacker.net.'),
    PTR('172.31.16.2', 'resolv-au1sr-1.thefathacker.net.'),
    PTR('172.31.16.3', 'dc-au1sr-1.thefathacker.net.'),
    PTR('172.31.16.4', 'mssql-au1sr-1.thefathacker.net.'),
    PTR('172.31.16.5', 'deploy-au1sr-1.thefathacker.net.'),
    PTR('172.31.224.1', 'pf-au1fw-3.thefathacker.net.'),
    PTR('172.31.240.1', 'pf-au1fw-3.thefathacker.net.'),
    PTR('172.31.244.1', 'pf-au1fw-3.thefathacker.net.')
);
D(REV('fd03:580b:a316::/48'), REG_NONE, DnsProvider(DNS_BIND), NSSERVERS, 
    PTR('fd03:580b:a316:1f00::', 'pf-au1fw-3.thefathacker.net.'),
    PTR('fd03:580b:a316:1f00::1', 'rb-au1ro-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f00::2', 'rb-au1ro-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f00::3', 'pf-au1fw-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f00::4', 'pf-au1fw-2.thefathacker.net.'),
    PTR('fd03:580b:a316:1f01::1', 'vrrp-gateway.thefathacker.net.'),
    PTR('fd03:580b:a316:1f00::2', 'es-au1sw-2.thefathacker.net.'),
    PTR('fd03:580b:a316:1f00::3', 'esx-au1vh-3.thefathacker.net.'),
    PTR('fd03:580b:a316:1f00::4', 'rhv-au1vh-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f00::f0', 'pf-au1fw-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f00::f1', 'pf-au1fw-2.thefathacker.net.'),
    PTR('fd03:580b:a316:1f02::9', 'pf-au1fw-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f02::d', 'pf-au1fw-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f02::11', 'pf-au1fw-2.thefathacker.net.'),
    PTR('fd03:580b:a316:1f02::15', 'pf-au1fw-2.thefathacker.net.'),
    PTR('fd03:580b:a316:1f10::1', 'vrrp-gateway.thefathacker.net.'),
    PTR('fd03:580b:a316:1f10::2', 'resolv-au1sr-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f10::3', 'dc-au1sr-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f10::4', 'mssql-au1sr-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f10::5', 'deploy-au1sr-1.thefathacker.net.')
);