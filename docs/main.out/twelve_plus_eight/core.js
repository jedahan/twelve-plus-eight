// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('twelve_plus_eight.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
twelve_plus_eight.core.setup = (function twelve_plus_eight$core$setup(){
quil.core.frame_rate((30));

quil.core.smooth.cljs$core$IFn$_invoke$arity$1((2));

quil.core.text_font.cljs$core$IFn$_invoke$arity$2("Menlo",(32));

quil.core.no_stroke();

return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$max_DASH_lines,(40),cljs.core.cst$kw$num_DASH_lines,(11),cljs.core.cst$kw$num_DASH_points,(60),cljs.core.cst$kw$thetas,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),((2) * Math.PI),(Math.PI / (60))),cljs.core.cst$kw$padding_DASH_ratio,0.1], null);
});
twelve_plus_eight.core.update_state = (function twelve_plus_eight$core$update_state(state){
return state;
});
twelve_plus_eight.core.mouse_moved = (function twelve_plus_eight$core$mouse_moved(state){
var mx = (quil.core.mouse_x() / quil.core.width());
var my = (quil.core.mouse_y() / quil.core.height());
var num_lines = (function (){var x__8337__auto__ = quil.core.floor((cljs.core.cst$kw$max_DASH_lines.cljs$core$IFn$_invoke$arity$1(state) * mx));
var y__8338__auto__ = cljs.core.cst$kw$max_DASH_lines.cljs$core$IFn$_invoke$arity$1(state);
return ((x__8337__auto__ < y__8338__auto__) ? x__8337__auto__ : y__8338__auto__);
})();
var padding_ratio = (function (){var x__8337__auto__ = 0.49;
var y__8338__auto__ = my;
return ((x__8337__auto__ < y__8338__auto__) ? x__8337__auto__ : y__8338__auto__);
})();
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_lines,cljs.core.cst$kw$num_DASH_lines.cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padding_ratio,cljs.core.cst$kw$padding_DASH_ratio.cljs$core$IFn$_invoke$arity$1(state)))){
return state;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$num_DASH_lines,num_lines,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$padding_DASH_ratio,padding_ratio], 0));
}
});
twelve_plus_eight.core.sign = (function twelve_plus_eight$core$sign(x){
if((x > (0))){
return (1);
} else {
if((x < (0))){
return (-1);
} else {
return (0);

}
}
});
twelve_plus_eight.core.squircle = (function twelve_plus_eight$core$squircle(theta,curvature){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.pow(quil.core.abs(quil.core.cos(theta)),curvature) * twelve_plus_eight.core.sign(quil.core.cos(theta))),(quil.core.pow(quil.core.abs(quil.core.sin(theta)),curvature) * twelve_plus_eight.core.sign(quil.core.sin(theta)))], null);
});
twelve_plus_eight.core.draw_state = (function twelve_plus_eight$core$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$3((220),(220),(120));

var padding_amount = (cljs.core.cst$kw$padding_DASH_ratio.cljs$core$IFn$_invoke$arity$1(state) * quil.core.width());
var seq__14525 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),1.01,((1) / (cljs.core.cst$kw$num_DASH_lines.cljs$core$IFn$_invoke$arity$1(state) - (1)))));
var chunk__14526 = null;
var count__14527 = (0);
var i__14528 = (0);
while(true){
if((i__14528 < count__14527)){
var radius_ratio = chunk__14526.cljs$core$IIndexed$_nth$arity$2(null,i__14528);
var radius_14573 = (((quil.core.width() * radius_ratio) * (0.5 - ((2) * cljs.core.cst$kw$padding_DASH_ratio.cljs$core$IFn$_invoke$arity$1(state)))) + padding_amount);
var coords_14574 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__14525,chunk__14526,count__14527,i__14528,radius_14573,radius_ratio,padding_amount){
return (function (theta){
return twelve_plus_eight.core.squircle(theta,((1) - radius_ratio));
});})(seq__14525,chunk__14526,count__14527,i__14528,radius_14573,radius_ratio,padding_amount))
,cljs.core.cst$kw$thetas.cljs$core$IFn$_invoke$arity$1(state));
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.stroke_weight((2));

var tr__14424__auto___14575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__14424__auto___14575);

quil.core.text.cljs$core$IFn$_invoke$arity$3("hello",(-34),(10));

var seq__14529_14576 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coords_14574));
var chunk__14530_14577 = null;
var count__14531_14578 = (0);
var i__14532_14579 = (0);
while(true){
if((i__14532_14579 < count__14531_14578)){
var vec__14533_14580 = chunk__14530_14577.cljs$core$IIndexed$_nth$arity$2(null,i__14532_14579);
var i_14581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14533_14580,(0),null);
var coord_14582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14533_14580,(1),null);
var vec__14536_14583 = coord_14582;
var x1_14584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14536_14583,(0),null);
var y1_14585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14536_14583,(1),null);
var vec__14539_14586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coords_14574,cljs.core.mod((i_14581 + (1)),((2) * cljs.core.cst$kw$num_DASH_points.cljs$core$IFn$_invoke$arity$1(state))));
var x2_14587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14539_14586,(0),null);
var y2_14588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14539_14586,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4((x1_14584 * radius_14573),(y1_14585 * radius_14573),(x2_14587 * radius_14573),(y2_14588 * radius_14573));

var G__14589 = seq__14529_14576;
var G__14590 = chunk__14530_14577;
var G__14591 = count__14531_14578;
var G__14592 = (i__14532_14579 + (1));
seq__14529_14576 = G__14589;
chunk__14530_14577 = G__14590;
count__14531_14578 = G__14591;
i__14532_14579 = G__14592;
continue;
} else {
var temp__4657__auto___14593 = cljs.core.seq(seq__14529_14576);
if(temp__4657__auto___14593){
var seq__14529_14594__$1 = temp__4657__auto___14593;
if(cljs.core.chunked_seq_QMARK_(seq__14529_14594__$1)){
var c__8819__auto___14595 = cljs.core.chunk_first(seq__14529_14594__$1);
var G__14596 = cljs.core.chunk_rest(seq__14529_14594__$1);
var G__14597 = c__8819__auto___14595;
var G__14598 = cljs.core.count(c__8819__auto___14595);
var G__14599 = (0);
seq__14529_14576 = G__14596;
chunk__14530_14577 = G__14597;
count__14531_14578 = G__14598;
i__14532_14579 = G__14599;
continue;
} else {
var vec__14542_14600 = cljs.core.first(seq__14529_14594__$1);
var i_14601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14542_14600,(0),null);
var coord_14602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14542_14600,(1),null);
var vec__14545_14603 = coord_14602;
var x1_14604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545_14603,(0),null);
var y1_14605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545_14603,(1),null);
var vec__14548_14606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coords_14574,cljs.core.mod((i_14601 + (1)),((2) * cljs.core.cst$kw$num_DASH_points.cljs$core$IFn$_invoke$arity$1(state))));
var x2_14607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14548_14606,(0),null);
var y2_14608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14548_14606,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4((x1_14604 * radius_14573),(y1_14605 * radius_14573),(x2_14607 * radius_14573),(y2_14608 * radius_14573));

var G__14609 = cljs.core.next(seq__14529_14594__$1);
var G__14610 = null;
var G__14611 = (0);
var G__14612 = (0);
seq__14529_14576 = G__14609;
chunk__14530_14577 = G__14610;
count__14531_14578 = G__14611;
i__14532_14579 = G__14612;
continue;
}
} else {
}
}
break;
}
}finally {quil.core.pop_matrix();
}
var G__14613 = seq__14525;
var G__14614 = chunk__14526;
var G__14615 = count__14527;
var G__14616 = (i__14528 + (1));
seq__14525 = G__14613;
chunk__14526 = G__14614;
count__14527 = G__14615;
i__14528 = G__14616;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14525);
if(temp__4657__auto__){
var seq__14525__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14525__$1)){
var c__8819__auto__ = cljs.core.chunk_first(seq__14525__$1);
var G__14617 = cljs.core.chunk_rest(seq__14525__$1);
var G__14618 = c__8819__auto__;
var G__14619 = cljs.core.count(c__8819__auto__);
var G__14620 = (0);
seq__14525 = G__14617;
chunk__14526 = G__14618;
count__14527 = G__14619;
i__14528 = G__14620;
continue;
} else {
var radius_ratio = cljs.core.first(seq__14525__$1);
var radius_14621 = (((quil.core.width() * radius_ratio) * (0.5 - ((2) * cljs.core.cst$kw$padding_DASH_ratio.cljs$core$IFn$_invoke$arity$1(state)))) + padding_amount);
var coords_14622 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__14525,chunk__14526,count__14527,i__14528,radius_14621,radius_ratio,seq__14525__$1,temp__4657__auto__,padding_amount){
return (function (theta){
return twelve_plus_eight.core.squircle(theta,((1) - radius_ratio));
});})(seq__14525,chunk__14526,count__14527,i__14528,radius_14621,radius_ratio,seq__14525__$1,temp__4657__auto__,padding_amount))
,cljs.core.cst$kw$thetas.cljs$core$IFn$_invoke$arity$1(state));
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.stroke_weight((2));

var tr__14424__auto___14623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__14424__auto___14623);

quil.core.text.cljs$core$IFn$_invoke$arity$3("hello",(-34),(10));

var seq__14551_14624 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coords_14622));
var chunk__14552_14625 = null;
var count__14553_14626 = (0);
var i__14554_14627 = (0);
while(true){
if((i__14554_14627 < count__14553_14626)){
var vec__14555_14628 = chunk__14552_14625.cljs$core$IIndexed$_nth$arity$2(null,i__14554_14627);
var i_14629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14555_14628,(0),null);
var coord_14630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14555_14628,(1),null);
var vec__14558_14631 = coord_14630;
var x1_14632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14558_14631,(0),null);
var y1_14633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14558_14631,(1),null);
var vec__14561_14634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coords_14622,cljs.core.mod((i_14629 + (1)),((2) * cljs.core.cst$kw$num_DASH_points.cljs$core$IFn$_invoke$arity$1(state))));
var x2_14635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14561_14634,(0),null);
var y2_14636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14561_14634,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4((x1_14632 * radius_14621),(y1_14633 * radius_14621),(x2_14635 * radius_14621),(y2_14636 * radius_14621));

var G__14637 = seq__14551_14624;
var G__14638 = chunk__14552_14625;
var G__14639 = count__14553_14626;
var G__14640 = (i__14554_14627 + (1));
seq__14551_14624 = G__14637;
chunk__14552_14625 = G__14638;
count__14553_14626 = G__14639;
i__14554_14627 = G__14640;
continue;
} else {
var temp__4657__auto___14641__$1 = cljs.core.seq(seq__14551_14624);
if(temp__4657__auto___14641__$1){
var seq__14551_14642__$1 = temp__4657__auto___14641__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14551_14642__$1)){
var c__8819__auto___14643 = cljs.core.chunk_first(seq__14551_14642__$1);
var G__14644 = cljs.core.chunk_rest(seq__14551_14642__$1);
var G__14645 = c__8819__auto___14643;
var G__14646 = cljs.core.count(c__8819__auto___14643);
var G__14647 = (0);
seq__14551_14624 = G__14644;
chunk__14552_14625 = G__14645;
count__14553_14626 = G__14646;
i__14554_14627 = G__14647;
continue;
} else {
var vec__14564_14648 = cljs.core.first(seq__14551_14642__$1);
var i_14649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14564_14648,(0),null);
var coord_14650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14564_14648,(1),null);
var vec__14567_14651 = coord_14650;
var x1_14652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567_14651,(0),null);
var y1_14653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567_14651,(1),null);
var vec__14570_14654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coords_14622,cljs.core.mod((i_14649 + (1)),((2) * cljs.core.cst$kw$num_DASH_points.cljs$core$IFn$_invoke$arity$1(state))));
var x2_14655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14570_14654,(0),null);
var y2_14656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14570_14654,(1),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4((x1_14652 * radius_14621),(y1_14653 * radius_14621),(x2_14655 * radius_14621),(y2_14656 * radius_14621));

var G__14657 = cljs.core.next(seq__14551_14642__$1);
var G__14658 = null;
var G__14659 = (0);
var G__14660 = (0);
seq__14551_14624 = G__14657;
chunk__14552_14625 = G__14658;
count__14553_14626 = G__14659;
i__14554_14627 = G__14660;
continue;
}
} else {
}
}
break;
}
}finally {quil.core.pop_matrix();
}
var G__14661 = cljs.core.next(seq__14525__$1);
var G__14662 = null;
var G__14663 = (0);
var G__14664 = (0);
seq__14525 = G__14661;
chunk__14526 = G__14662;
count__14527 = G__14663;
i__14528 = G__14664;
continue;
}
} else {
return null;
}
}
break;
}
});
twelve_plus_eight.core.twelve_plus_eight = (function twelve_plus_eight$core$twelve_plus_eight(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"twelve-plus-eight",cljs.core.cst$kw$mouse_DASH_moved,((cljs.core.fn_QMARK_(twelve_plus_eight.core.mouse_moved))?(function() { 
var G__14665__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(twelve_plus_eight.core.mouse_moved,args);
};
var G__14665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14666__i = 0, G__14666__a = new Array(arguments.length -  0);
while (G__14666__i < G__14666__a.length) {G__14666__a[G__14666__i] = arguments[G__14666__i + 0]; ++G__14666__i;}
  args = new cljs.core.IndexedSeq(G__14666__a,0,null);
} 
return G__14665__delegate.call(this,args);};
G__14665.cljs$lang$maxFixedArity = 0;
G__14665.cljs$lang$applyTo = (function (arglist__14667){
var args = cljs.core.seq(arglist__14667);
return G__14665__delegate(args);
});
G__14665.cljs$core$IFn$_invoke$arity$variadic = G__14665__delegate;
return G__14665;
})()
:twelve_plus_eight.core.mouse_moved),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(twelve_plus_eight.core.update_state))?(function() { 
var G__14668__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(twelve_plus_eight.core.update_state,args);
};
var G__14668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14669__i = 0, G__14669__a = new Array(arguments.length -  0);
while (G__14669__i < G__14669__a.length) {G__14669__a[G__14669__i] = arguments[G__14669__i + 0]; ++G__14669__i;}
  args = new cljs.core.IndexedSeq(G__14669__a,0,null);
} 
return G__14668__delegate.call(this,args);};
G__14668.cljs$lang$maxFixedArity = 0;
G__14668.cljs$lang$applyTo = (function (arglist__14670){
var args = cljs.core.seq(arglist__14670);
return G__14668__delegate(args);
});
G__14668.cljs$core$IFn$_invoke$arity$variadic = G__14668__delegate;
return G__14668;
})()
:twelve_plus_eight.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(900),(900)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(twelve_plus_eight.core.setup))?(function() { 
var G__14671__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(twelve_plus_eight.core.setup,args);
};
var G__14671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14672__i = 0, G__14672__a = new Array(arguments.length -  0);
while (G__14672__i < G__14672__a.length) {G__14672__a[G__14672__i] = arguments[G__14672__i + 0]; ++G__14672__i;}
  args = new cljs.core.IndexedSeq(G__14672__a,0,null);
} 
return G__14671__delegate.call(this,args);};
G__14671.cljs$lang$maxFixedArity = 0;
G__14671.cljs$lang$applyTo = (function (arglist__14673){
var args = cljs.core.seq(arglist__14673);
return G__14671__delegate(args);
});
G__14671.cljs$core$IFn$_invoke$arity$variadic = G__14671__delegate;
return G__14671;
})()
:twelve_plus_eight.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(twelve_plus_eight.core.draw_state))?(function() { 
var G__14674__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(twelve_plus_eight.core.draw_state,args);
};
var G__14674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14675__i = 0, G__14675__a = new Array(arguments.length -  0);
while (G__14675__i < G__14675__a.length) {G__14675__a[G__14675__i] = arguments[G__14675__i + 0]; ++G__14675__i;}
  args = new cljs.core.IndexedSeq(G__14675__a,0,null);
} 
return G__14674__delegate.call(this,args);};
G__14674.cljs$lang$maxFixedArity = 0;
G__14674.cljs$lang$applyTo = (function (arglist__14676){
var args = cljs.core.seq(arglist__14676);
return G__14674__delegate(args);
});
G__14674.cljs$core$IFn$_invoke$arity$variadic = G__14674__delegate;
return G__14674;
})()
:twelve_plus_eight.core.draw_state)], 0));
});
goog.exportSymbol('twelve_plus_eight.core.twelve_plus_eight', twelve_plus_eight.core.twelve_plus_eight);

if(cljs.core.truth_(cljs.core.some((function (p1__13555__13556__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13555__13556__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,twelve_plus_eight.core.twelve_plus_eight,cljs.core.cst$kw$host_DASH_id,"twelve-plus-eight"], null));
}
