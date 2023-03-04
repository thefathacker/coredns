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