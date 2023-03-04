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
    PTR('192.168.255.0', 'dns-primary.thefathacker.net.')
);
D(REV('172.31.0.0/16'), REG_NONE, DnsProvider(DNS_BIND), NSSERVERS, 
    PTR('172.31.0.0', 'pf-au1fw-3.thefathacker.net.'),
    PTR('172.31.0.1', 'rb-au1ro-1.thefathacker.net.'),
    PTR('172.31.0.2', 'rb-au1ro-1.thefathacker.net.'),
    PTR('172.31.16.1', 'vrrp.thefathacker.net.'),
    PTR('172.31.16.2', 'resolv-au1sr-1.thefathacker.net.'),
    PTR('172.31.16.3', 'dc-au1sr-1.thefathacker.net.')
);
D(REV('fd03:580b:a316::/48'), REG_NONE, DnsProvider(DNS_BIND), NSSERVERS, 
    PTR('fd03:580b:a316:1f00::', 'pf-au1fw-3.thefathacker.net.'),
    PTR('fd03:580b:a316:1f00::1', 'rb-au1ro-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f00::2', 'rb-au1ro-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f10::', 'vrrp.thefathacker.net.'),
    PTR('fd03:580b:a316:1f10::1', 'resolv-au1sr-1.thefathacker.net.'),
    PTR('fd03:580b:a316:1f10::2', 'dc-au1sr-1.thefathacker.net.')
);