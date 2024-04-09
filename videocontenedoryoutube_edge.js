
(function(compId){var _=null,y=true,n=false,x10='visible',x21='28px',x3='6.0.0.400',x2='5.0.0',x15='265px',x17='-791px',x22='Rectangle',x19='rgb(0, 0, 0)',x26='169px',x23='353px',x5='36.8%',x25='Rectangle2',x18='video2',x24='rgba(167,114,114,1)',x27='945px',x13='true',x20='rgba(167,114,114,1.00)',x9='auto',x8='315px',x16='0px',x1='6.0.0',x14='473px',x4='rgba(255,255,255,1)',x12='rgba(105,105,183,1.00)',m='rect',x6='4.9%',xc='rgba(0,0,0,1)',x11='video',x7='560px',i='none';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'contenedor_video6',symbolName:'contenedor_video',t:m,r:['0px','0px','undefined','undefined','auto','auto']}],style:{'${Stage}':{isStage:true,r:['null','null','560px','314px','auto','auto'],overflow:'hidden',f:[x4]}}},tt:{d:65,a:y,data:[]}},"contenedorvideo":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x5,x6,x7,x8,x9,x9],overflow:x10,id:x11,s:[0,xc,i],t:m,f:[x12]}],style:{'${symbolSelector}':{isStage:x13,r:[undefined,undefined,x14,x15]}}},tt:{d:0,a:y,data:[]}},"contenedor_video":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x16,x17,x7,x8,x9,x9],id:x18,s:[0,x19,i],t:m,f:[x20]}],style:{'${symbolSelector}':{isStage:x13,r:[undefined,undefined,x7,x8]}}},tt:{d:0,a:y,data:[]}},"Symbol_1":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[],style:{'${symbolSelector}':{r:[_,_,x7,x21]}}},tt:{d:1000,a:y,data:[]}},"mascara":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{t:m,id:x22,s:[0,x19,i],r:[x16,x16,x7,x23,x9,x9],f:[x24]}],style:{'${symbolSelector}':{r:[_,_,x7,x23]}}},tt:{d:0,a:y,data:[]}},"contiene_peli":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{t:m,id:x25,s:[0,x19,i],r:[x26,x16,x7,x8,x9,x9],f:[x24]}],style:{'${symbolSelector}':{r:[_,_,x7,x8]}}},tt:{d:0,a:y,data:[]}},"contiene_segundo":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x16,x8,x7,x8,x9,x9],id:x22,s:[0,x19,i],t:m,f:[x24]}],style:{'${symbolSelector}':{isStage:x13,r:[undefined,undefined,x7,x27]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-11865568");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'contenedorvideo'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var visorvideo=sym.$("video");var reproductor='<iframe width="560" height="315" src="https://www.youtube.com/embed/i__qHdsldXA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';visorvideo.html(reproductor)});
//Edge binding end
})("contenedorvideo");
//Edge symbol end:'contenedorvideo'

//=========================================================

//Edge symbol: 'contenedorvideo2'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var visorvideo=sym.$("video2");var reproductor='<iframe width="560" height="1890" src="https://www.youtube.com/embed/i__qHdsldXA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';visorvideo.html(reproductor)});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("contenedor_video");
//Edge symbol end:'contenedor_video'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'mascara'
(function(symbolName){})("mascara");
//Edge symbol end:'mascara'

//=========================================================

//Edge symbol: 'contiene_peli'
(function(symbolName){})("contiene_peli");
//Edge symbol end:'contiene_peli'

//=========================================================

//Edge symbol: 'contiene_segundo'
(function(symbolName){})("contiene_segundo");
//Edge symbol end:'contiene_segundo'
})})(AdobeEdge.$,AdobeEdge,"EDGE-11865568");