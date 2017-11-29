// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__13565 = arguments.length;
switch (G__13565) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__13567 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__13568 = null;
var count__13569 = (0);
var i__13570 = (0);
while(true){
if((i__13570 < count__13569)){
var vec__13571 = chunk__13568.cljs$core$IIndexed$_nth$arity$2(null,i__13570);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13571,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13571,(1),null);
var temp__4657__auto___13579 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4657__auto___13579)){
var handler_13580 = temp__4657__auto___13579;
(prc[cljs.core.name(processing_name)] = ((function (seq__13567,chunk__13568,count__13569,i__13570,handler_13580,temp__4657__auto___13579,vec__13571,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_13574 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_13580.cljs$core$IFn$_invoke$arity$0 ? handler_13580.cljs$core$IFn$_invoke$arity$0() : handler_13580.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_13574;
}});})(seq__13567,chunk__13568,count__13569,i__13570,handler_13580,temp__4657__auto___13579,vec__13571,processing_name,quil_name))
);
} else {
}

var G__13581 = seq__13567;
var G__13582 = chunk__13568;
var G__13583 = count__13569;
var G__13584 = (i__13570 + (1));
seq__13567 = G__13581;
chunk__13568 = G__13582;
count__13569 = G__13583;
i__13570 = G__13584;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13567);
if(temp__4657__auto__){
var seq__13567__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13567__$1)){
var c__8819__auto__ = cljs.core.chunk_first(seq__13567__$1);
var G__13585 = cljs.core.chunk_rest(seq__13567__$1);
var G__13586 = c__8819__auto__;
var G__13587 = cljs.core.count(c__8819__auto__);
var G__13588 = (0);
seq__13567 = G__13585;
chunk__13568 = G__13586;
count__13569 = G__13587;
i__13570 = G__13588;
continue;
} else {
var vec__13575 = cljs.core.first(seq__13567__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13575,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13575,(1),null);
var temp__4657__auto___13589__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4657__auto___13589__$1)){
var handler_13590 = temp__4657__auto___13589__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__13567,chunk__13568,count__13569,i__13570,handler_13590,temp__4657__auto___13589__$1,vec__13575,processing_name,quil_name,seq__13567__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_13578 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_13590.cljs$core$IFn$_invoke$arity$0 ? handler_13590.cljs$core$IFn$_invoke$arity$0() : handler_13590.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_13578;
}});})(seq__13567,chunk__13568,count__13569,i__13570,handler_13590,temp__4657__auto___13589__$1,vec__13575,processing_name,quil_name,seq__13567__$1,temp__4657__auto__))
);
} else {
}

var G__13591 = cljs.core.next(seq__13567__$1);
var G__13592 = null;
var G__13593 = (0);
var G__13594 = (0);
seq__13567 = G__13591;
chunk__13568 = G__13592;
count__13569 = G__13593;
i__13570 = G__13594;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__13597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__13596 = ((function (G__13597){
return (function (p1__13595_SHARP_){
return (p1__13595_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13595_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__13595_SHARP_.call(null,options));
});})(G__13597))
;
return fexpr__13596(G__13597);
})()], 0));
var sketch_size = (function (){var or__7980__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7980__auto__)){
return or__7980__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__13598_13602 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__13598_13602.cljs$core$IFn$_invoke$arity$0 ? fexpr__13598_13602.cljs$core$IFn$_invoke$arity$0() : fexpr__13598_13602.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__13599 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__13599.cljs$core$IFn$_invoke$arity$0 ? fexpr__13599.cljs$core$IFn$_invoke$arity$0() : fexpr__13599.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
var G__13601 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
var fexpr__13600 = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__13600.cljs$core$IFn$_invoke$arity$1 ? fexpr__13600.cljs$core$IFn$_invoke$arity$1(G__13601) : fexpr__13600.call(null,G__13601));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.target_frame_rate = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__4657__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__4657__auto__)){
var proc_obj = temp__4657__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__9158__auto__ = [];
var len__9151__auto___13605 = arguments.length;
var i__9152__auto___13606 = (0);
while(true){
if((i__9152__auto___13606 < len__9151__auto___13605)){
args__9158__auto__.push((arguments[i__9152__auto___13606]));

var G__13607 = (i__9152__auto___13606 + (1));
i__9152__auto___13606 = G__13607;
continue;
} else {
}
break;
}

var argseq__9159__auto__ = ((((0) < args__9158__auto__.length))?(new cljs.core.IndexedSeq(args__9158__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__9159__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__13604 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__13604);
})();
var renderer = (function (){var or__7980__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__7980__auto__)){
return or__7980__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem);

return host_elem.processing_obj = (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
} else {
return console.error("ERROR: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq13603){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13603));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__13614 = quil.sketch.empty_body_QMARK_();
var seq__13608_13615 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__13609_13616 = null;
var count__13610_13617 = (0);
var i__13611_13618 = (0);
while(true){
if((i__13611_13618 < count__13610_13617)){
var sk_13619 = chunk__13609_13616.cljs$core$IIndexed$_nth$arity$2(null,i__13611_13618);
if(cljs.core.truth_(add_elem_QMARK__13614)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_13619));
} else {
}

var fexpr__13612_13620 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_13619);
(fexpr__13612_13620.cljs$core$IFn$_invoke$arity$0 ? fexpr__13612_13620.cljs$core$IFn$_invoke$arity$0() : fexpr__13612_13620.call(null));

var G__13621 = seq__13608_13615;
var G__13622 = chunk__13609_13616;
var G__13623 = count__13610_13617;
var G__13624 = (i__13611_13618 + (1));
seq__13608_13615 = G__13621;
chunk__13609_13616 = G__13622;
count__13610_13617 = G__13623;
i__13611_13618 = G__13624;
continue;
} else {
var temp__4657__auto___13625 = cljs.core.seq(seq__13608_13615);
if(temp__4657__auto___13625){
var seq__13608_13626__$1 = temp__4657__auto___13625;
if(cljs.core.chunked_seq_QMARK_(seq__13608_13626__$1)){
var c__8819__auto___13627 = cljs.core.chunk_first(seq__13608_13626__$1);
var G__13628 = cljs.core.chunk_rest(seq__13608_13626__$1);
var G__13629 = c__8819__auto___13627;
var G__13630 = cljs.core.count(c__8819__auto___13627);
var G__13631 = (0);
seq__13608_13615 = G__13628;
chunk__13609_13616 = G__13629;
count__13610_13617 = G__13630;
i__13611_13618 = G__13631;
continue;
} else {
var sk_13632 = cljs.core.first(seq__13608_13626__$1);
if(cljs.core.truth_(add_elem_QMARK__13614)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_13632));
} else {
}

var fexpr__13613_13633 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_13632);
(fexpr__13613_13633.cljs$core$IFn$_invoke$arity$0 ? fexpr__13613_13633.cljs$core$IFn$_invoke$arity$0() : fexpr__13613_13633.call(null));

var G__13634 = cljs.core.next(seq__13608_13626__$1);
var G__13635 = null;
var G__13636 = (0);
var G__13637 = (0);
seq__13608_13615 = G__13634;
chunk__13609_13616 = G__13635;
count__13610_13617 = G__13636;
i__13611_13618 = G__13637;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
