/*
 * Endershare: service worker del mapa en GitHub Pages.
 *
 * El sitio principal solo puede pesar ~1 GB, asi que los tiles hires que no
 * caben viven en repos hermanos bajo el MISMO origen (farmland-map-t1, ...).
 * Aqui se intercepta cada tile: si el repo principal responde 404, se pide al
 * shard. Mismo origen, sin CORS, invisible para el visor.
 */
var SHARDS = [ "/farmland-map-t1/" ];

self.addEventListener( "install", function () { self.skipWaiting(); } );
self.addEventListener( "activate", function ( event ) { event.waitUntil( self.clients.claim() ); } );

self.addEventListener( "fetch", function ( event )
{
	var url = new URL( event.request.url );
	if( url.origin !== self.location.origin || url.pathname.indexOf( "/farmland-map/maps/" ) !== 0
			|| url.pathname.indexOf( "/tiles/0/" ) < 0 )
		return;
	event.respondWith( ( async function ()
	{
		var primary = await fetch( event.request );
		if( primary.ok || primary.status === 304 )
			return primary;
		for( var i = 0; i < SHARDS.length; i++ )
		{
			var fallback = await fetch( url.pathname.replace( "/farmland-map/", SHARDS[i] ) );
			if( fallback.ok )
				return fallback;
		}
		return primary;
	} )() );
} );
