function FindProxyForURL(url, host)
{
if (shExpMatch(url, "*.activecore.*")) return 'DIRECT';
if (shExpMatch(url, "*tracer31.a-cast.jp*")) return 'DIRECT';
if (shExpMatch(url, "*jp.rakuten-static.com*")) return 'DIRECT';
if (shExpMatch(url, "*payvault-stg.global.rakuten.com*")) return 'DIRECT';
if (shExpMatch(url, "*facebook.net*")) return 'DIRECT';
if (shExpMatch(url, "*twitter.com*")) return 'DIRECT';
if (shExpMatch(url, "*brightcove*")) return 'DIRECT';
if (shExpMatch(url, "*.linksynergy.*")) return 'DIRECT';
if (shExpMatch(url, "*.rmtag.*")) return 'DIRECT';
if (shExpMatch(url, "*.r10s.*")) return 'DIRECT';
if (shExpMatch(url, "*rat.rakuten.*")) return 'DIRECT'; 
if (shExpMatch(url, "*api.suggest.search.rakuten.*")) return 'DIRECT'; 
return "PROXY stg-proxy.gecp.rakuten.co.jp:9518"
}