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

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$mx,0.5,cljs.core.cst$kw$my,0.5,cljs.core.cst$kw$max_DASH_lines,(40),cljs.core.cst$kw$num_DASH_lines,(11),cljs.core.cst$kw$num_DASH_points,(60),cljs.core.cst$kw$thetas,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),((2) * Math.PI),(Math.PI / (60))),cljs.core.cst$kw$padding_DASH_ratio,0.1], null);
});
twelve_plus_eight.core.update_state = (function twelve_plus_eight$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$mx,(quil.core.mouse_x() / quil.core.width()),cljs.core.cst$kw$my,(quil.core.mouse_y() / quil.core.height()),cljs.core.cst$kw$max_DASH_lines,cljs.core.cst$kw$max_DASH_lines.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$num_DASH_lines,(function (){var x__8337__auto__ = quil.core.floor((cljs.core.cst$kw$max_DASH_lines.cljs$core$IFn$_invoke$arity$1(state) * cljs.core.cst$kw$mx.cljs$core$IFn$_invoke$arity$1(state)));
var y__8338__auto__ = cljs.core.cst$kw$max_DASH_lines.cljs$core$IFn$_invoke$arity$1(state);
return ((x__8337__auto__ < y__8338__auto__) ? x__8337__auto__ : y__8338__auto__);
})(),cljs.core.cst$kw$num_DASH_points,cljs.core.cst$kw$num_DASH_points.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$thetas,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),((2) * Math.PI),(Math.PI / cljs.core.cst$kw$num_DASH_points.cljs$core$IFn$_invoke$arity$1(state))),cljs.core.cst$kw$padding_DASH_ratio,(function (){var x__8337__auto__ = 0.49;
var y__8338__auto__ = cljs.core.cst$kw$my.cljs$core$IFn$_invoke$arity$1(state);
return ((x__8337__auto__ < y__8338__auto__) ? x__8337__auto__ : y__8338__auto__);
})()], null);
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
var radius_14585 = (((quil.core.width() * radius_ratio) * (0.5 - ((2) * cljs.core.cst$kw$padding_DASH_ratio.cljs$core$IFn$_invoke$arity$1(state)))) + padding_amount);
var coords_14586 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__14525,chunk__14526,count__14527,i__14528,radius_14585,radius_ratio,padding_amount){
return (function (theta){
return twelve_plus_eight.core.squircle(theta,((1) - radius_ratio));
});})(seq__14525,chunk__14526,count__14527,i__14528,radius_14585,radius_ratio,padding_amount))
,cljs.core.cst$kw$thetas.cljs$core$IFn$_invoke$arity$1(state));
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.stroke_weight((2));

var tr__14424__auto___14587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__14424__auto___14587);

quil.core.text.cljs$core$IFn$_invoke$arity$3("hello",(-34),(10));

var seq__14529_14588 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coords_14586));
var chunk__14530_14589 = null;
var count__14531_14590 = (0);
var i__14532_14591 = (0);
while(true){
if((i__14532_14591 < count__14531_14590)){
var vec__14533_14592 = chunk__14530_14589.cljs$core$IIndexed$_nth$arity$2(null,i__14532_14591);
var i_14593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14533_14592,(0),null);
var coord_14594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14533_14592,(1),null);
var vec__14536_14595 = coord_14594;
var x1_14596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14536_14595,(0),null);
var y1_14597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14536_14595,(1),null);
var vec__14539_14598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coords_14586,cljs.core.mod((i_14593 + (1)),((2) * cljs.core.cst$kw$num_DASH_points.cljs$core$IFn$_invoke$arity$1(state))));
var x2_14599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14539_14598,(0),null);
var y2_14600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14539_14598,(1),null);
var vec__14542_14601 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__14529_14588,chunk__14530_14589,count__14531_14590,i__14532_14591,seq__14525,chunk__14526,count__14527,i__14528,vec__14536_14595,x1_14596,y1_14597,vec__14539_14598,x2_14599,y2_14600,vec__14533_14592,i_14593,coord_14594,tr__14424__auto___14587,radius_14585,coords_14586,radius_ratio,padding_amount){
return (function (x){
return (x * radius_14585);
});})(seq__14529_14588,chunk__14530_14589,count__14531_14590,i__14532_14591,seq__14525,chunk__14526,count__14527,i__14528,vec__14536_14595,x1_14596,y1_14597,vec__14539_14598,x2_14599,y2_14600,vec__14533_14592,i_14593,coord_14594,tr__14424__auto___14587,radius_14585,coords_14586,radius_ratio,padding_amount))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_14596,y1_14597,x2_14599,y2_14600], null));
var a_14602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14542_14601,(0),null);
var b_14603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14542_14601,(1),null);
var c_14604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14542_14601,(2),null);
var d_14605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14542_14601,(3),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(a_14602,b_14603,c_14604,d_14605);

var G__14606 = seq__14529_14588;
var G__14607 = chunk__14530_14589;
var G__14608 = count__14531_14590;
var G__14609 = (i__14532_14591 + (1));
seq__14529_14588 = G__14606;
chunk__14530_14589 = G__14607;
count__14531_14590 = G__14608;
i__14532_14591 = G__14609;
continue;
} else {
var temp__4657__auto___14610 = cljs.core.seq(seq__14529_14588);
if(temp__4657__auto___14610){
var seq__14529_14611__$1 = temp__4657__auto___14610;
if(cljs.core.chunked_seq_QMARK_(seq__14529_14611__$1)){
var c__8819__auto___14612 = cljs.core.chunk_first(seq__14529_14611__$1);
var G__14613 = cljs.core.chunk_rest(seq__14529_14611__$1);
var G__14614 = c__8819__auto___14612;
var G__14615 = cljs.core.count(c__8819__auto___14612);
var G__14616 = (0);
seq__14529_14588 = G__14613;
chunk__14530_14589 = G__14614;
count__14531_14590 = G__14615;
i__14532_14591 = G__14616;
continue;
} else {
var vec__14545_14617 = cljs.core.first(seq__14529_14611__$1);
var i_14618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545_14617,(0),null);
var coord_14619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545_14617,(1),null);
var vec__14548_14620 = coord_14619;
var x1_14621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14548_14620,(0),null);
var y1_14622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14548_14620,(1),null);
var vec__14551_14623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coords_14586,cljs.core.mod((i_14618 + (1)),((2) * cljs.core.cst$kw$num_DASH_points.cljs$core$IFn$_invoke$arity$1(state))));
var x2_14624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14551_14623,(0),null);
var y2_14625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14551_14623,(1),null);
var vec__14554_14626 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__14529_14588,chunk__14530_14589,count__14531_14590,i__14532_14591,seq__14525,chunk__14526,count__14527,i__14528,vec__14548_14620,x1_14621,y1_14622,vec__14551_14623,x2_14624,y2_14625,vec__14545_14617,i_14618,coord_14619,seq__14529_14611__$1,temp__4657__auto___14610,tr__14424__auto___14587,radius_14585,coords_14586,radius_ratio,padding_amount){
return (function (x){
return (x * radius_14585);
});})(seq__14529_14588,chunk__14530_14589,count__14531_14590,i__14532_14591,seq__14525,chunk__14526,count__14527,i__14528,vec__14548_14620,x1_14621,y1_14622,vec__14551_14623,x2_14624,y2_14625,vec__14545_14617,i_14618,coord_14619,seq__14529_14611__$1,temp__4657__auto___14610,tr__14424__auto___14587,radius_14585,coords_14586,radius_ratio,padding_amount))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_14621,y1_14622,x2_14624,y2_14625], null));
var a_14627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14554_14626,(0),null);
var b_14628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14554_14626,(1),null);
var c_14629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14554_14626,(2),null);
var d_14630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14554_14626,(3),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(a_14627,b_14628,c_14629,d_14630);

var G__14631 = cljs.core.next(seq__14529_14611__$1);
var G__14632 = null;
var G__14633 = (0);
var G__14634 = (0);
seq__14529_14588 = G__14631;
chunk__14530_14589 = G__14632;
count__14531_14590 = G__14633;
i__14532_14591 = G__14634;
continue;
}
} else {
}
}
break;
}
}finally {quil.core.pop_matrix();
}
var G__14635 = seq__14525;
var G__14636 = chunk__14526;
var G__14637 = count__14527;
var G__14638 = (i__14528 + (1));
seq__14525 = G__14635;
chunk__14526 = G__14636;
count__14527 = G__14637;
i__14528 = G__14638;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14525);
if(temp__4657__auto__){
var seq__14525__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14525__$1)){
var c__8819__auto__ = cljs.core.chunk_first(seq__14525__$1);
var G__14639 = cljs.core.chunk_rest(seq__14525__$1);
var G__14640 = c__8819__auto__;
var G__14641 = cljs.core.count(c__8819__auto__);
var G__14642 = (0);
seq__14525 = G__14639;
chunk__14526 = G__14640;
count__14527 = G__14641;
i__14528 = G__14642;
continue;
} else {
var radius_ratio = cljs.core.first(seq__14525__$1);
var radius_14643 = (((quil.core.width() * radius_ratio) * (0.5 - ((2) * cljs.core.cst$kw$padding_DASH_ratio.cljs$core$IFn$_invoke$arity$1(state)))) + padding_amount);
var coords_14644 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__14525,chunk__14526,count__14527,i__14528,radius_14643,radius_ratio,seq__14525__$1,temp__4657__auto__,padding_amount){
return (function (theta){
return twelve_plus_eight.core.squircle(theta,((1) - radius_ratio));
});})(seq__14525,chunk__14526,count__14527,i__14528,radius_14643,radius_ratio,seq__14525__$1,temp__4657__auto__,padding_amount))
,cljs.core.cst$kw$thetas.cljs$core$IFn$_invoke$arity$1(state));
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.stroke_weight((2));

var tr__14424__auto___14645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__14424__auto___14645);

quil.core.text.cljs$core$IFn$_invoke$arity$3("hello",(-34),(10));

var seq__14557_14646 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coords_14644));
var chunk__14558_14647 = null;
var count__14559_14648 = (0);
var i__14560_14649 = (0);
while(true){
if((i__14560_14649 < count__14559_14648)){
var vec__14561_14650 = chunk__14558_14647.cljs$core$IIndexed$_nth$arity$2(null,i__14560_14649);
var i_14651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14561_14650,(0),null);
var coord_14652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14561_14650,(1),null);
var vec__14564_14653 = coord_14652;
var x1_14654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14564_14653,(0),null);
var y1_14655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14564_14653,(1),null);
var vec__14567_14656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coords_14644,cljs.core.mod((i_14651 + (1)),((2) * cljs.core.cst$kw$num_DASH_points.cljs$core$IFn$_invoke$arity$1(state))));
var x2_14657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567_14656,(0),null);
var y2_14658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567_14656,(1),null);
var vec__14570_14659 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__14557_14646,chunk__14558_14647,count__14559_14648,i__14560_14649,seq__14525,chunk__14526,count__14527,i__14528,vec__14564_14653,x1_14654,y1_14655,vec__14567_14656,x2_14657,y2_14658,vec__14561_14650,i_14651,coord_14652,tr__14424__auto___14645,radius_14643,coords_14644,radius_ratio,seq__14525__$1,temp__4657__auto__,padding_amount){
return (function (x){
return (x * radius_14643);
});})(seq__14557_14646,chunk__14558_14647,count__14559_14648,i__14560_14649,seq__14525,chunk__14526,count__14527,i__14528,vec__14564_14653,x1_14654,y1_14655,vec__14567_14656,x2_14657,y2_14658,vec__14561_14650,i_14651,coord_14652,tr__14424__auto___14645,radius_14643,coords_14644,radius_ratio,seq__14525__$1,temp__4657__auto__,padding_amount))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_14654,y1_14655,x2_14657,y2_14658], null));
var a_14660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14570_14659,(0),null);
var b_14661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14570_14659,(1),null);
var c_14662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14570_14659,(2),null);
var d_14663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14570_14659,(3),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(a_14660,b_14661,c_14662,d_14663);

var G__14664 = seq__14557_14646;
var G__14665 = chunk__14558_14647;
var G__14666 = count__14559_14648;
var G__14667 = (i__14560_14649 + (1));
seq__14557_14646 = G__14664;
chunk__14558_14647 = G__14665;
count__14559_14648 = G__14666;
i__14560_14649 = G__14667;
continue;
} else {
var temp__4657__auto___14668__$1 = cljs.core.seq(seq__14557_14646);
if(temp__4657__auto___14668__$1){
var seq__14557_14669__$1 = temp__4657__auto___14668__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14557_14669__$1)){
var c__8819__auto___14670 = cljs.core.chunk_first(seq__14557_14669__$1);
var G__14671 = cljs.core.chunk_rest(seq__14557_14669__$1);
var G__14672 = c__8819__auto___14670;
var G__14673 = cljs.core.count(c__8819__auto___14670);
var G__14674 = (0);
seq__14557_14646 = G__14671;
chunk__14558_14647 = G__14672;
count__14559_14648 = G__14673;
i__14560_14649 = G__14674;
continue;
} else {
var vec__14573_14675 = cljs.core.first(seq__14557_14669__$1);
var i_14676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14573_14675,(0),null);
var coord_14677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14573_14675,(1),null);
var vec__14576_14678 = coord_14677;
var x1_14679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14576_14678,(0),null);
var y1_14680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14576_14678,(1),null);
var vec__14579_14681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coords_14644,cljs.core.mod((i_14676 + (1)),((2) * cljs.core.cst$kw$num_DASH_points.cljs$core$IFn$_invoke$arity$1(state))));
var x2_14682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14579_14681,(0),null);
var y2_14683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14579_14681,(1),null);
var vec__14582_14684 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__14557_14646,chunk__14558_14647,count__14559_14648,i__14560_14649,seq__14525,chunk__14526,count__14527,i__14528,vec__14576_14678,x1_14679,y1_14680,vec__14579_14681,x2_14682,y2_14683,vec__14573_14675,i_14676,coord_14677,seq__14557_14669__$1,temp__4657__auto___14668__$1,tr__14424__auto___14645,radius_14643,coords_14644,radius_ratio,seq__14525__$1,temp__4657__auto__,padding_amount){
return (function (x){
return (x * radius_14643);
});})(seq__14557_14646,chunk__14558_14647,count__14559_14648,i__14560_14649,seq__14525,chunk__14526,count__14527,i__14528,vec__14576_14678,x1_14679,y1_14680,vec__14579_14681,x2_14682,y2_14683,vec__14573_14675,i_14676,coord_14677,seq__14557_14669__$1,temp__4657__auto___14668__$1,tr__14424__auto___14645,radius_14643,coords_14644,radius_ratio,seq__14525__$1,temp__4657__auto__,padding_amount))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_14679,y1_14680,x2_14682,y2_14683], null));
var a_14685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14582_14684,(0),null);
var b_14686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14582_14684,(1),null);
var c_14687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14582_14684,(2),null);
var d_14688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14582_14684,(3),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(a_14685,b_14686,c_14687,d_14688);

var G__14689 = cljs.core.next(seq__14557_14669__$1);
var G__14690 = null;
var G__14691 = (0);
var G__14692 = (0);
seq__14557_14646 = G__14689;
chunk__14558_14647 = G__14690;
count__14559_14648 = G__14691;
i__14560_14649 = G__14692;
continue;
}
} else {
}
}
break;
}
}finally {quil.core.pop_matrix();
}
var G__14693 = cljs.core.next(seq__14525__$1);
var G__14694 = null;
var G__14695 = (0);
var G__14696 = (0);
seq__14525 = G__14693;
chunk__14526 = G__14694;
count__14527 = G__14695;
i__14528 = G__14696;
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
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"twelve-plus-eight",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(twelve_plus_eight.core.update_state))?(function() { 
var G__14697__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(twelve_plus_eight.core.update_state,args);
};
var G__14697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14698__i = 0, G__14698__a = new Array(arguments.length -  0);
while (G__14698__i < G__14698__a.length) {G__14698__a[G__14698__i] = arguments[G__14698__i + 0]; ++G__14698__i;}
  args = new cljs.core.IndexedSeq(G__14698__a,0,null);
} 
return G__14697__delegate.call(this,args);};
G__14697.cljs$lang$maxFixedArity = 0;
G__14697.cljs$lang$applyTo = (function (arglist__14699){
var args = cljs.core.seq(arglist__14699);
return G__14697__delegate(args);
});
G__14697.cljs$core$IFn$_invoke$arity$variadic = G__14697__delegate;
return G__14697;
})()
:twelve_plus_eight.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(900),(900)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(twelve_plus_eight.core.setup))?(function() { 
var G__14700__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(twelve_plus_eight.core.setup,args);
};
var G__14700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14701__i = 0, G__14701__a = new Array(arguments.length -  0);
while (G__14701__i < G__14701__a.length) {G__14701__a[G__14701__i] = arguments[G__14701__i + 0]; ++G__14701__i;}
  args = new cljs.core.IndexedSeq(G__14701__a,0,null);
} 
return G__14700__delegate.call(this,args);};
G__14700.cljs$lang$maxFixedArity = 0;
G__14700.cljs$lang$applyTo = (function (arglist__14702){
var args = cljs.core.seq(arglist__14702);
return G__14700__delegate(args);
});
G__14700.cljs$core$IFn$_invoke$arity$variadic = G__14700__delegate;
return G__14700;
})()
:twelve_plus_eight.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(twelve_plus_eight.core.draw_state))?(function() { 
var G__14703__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(twelve_plus_eight.core.draw_state,args);
};
var G__14703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14704__i = 0, G__14704__a = new Array(arguments.length -  0);
while (G__14704__i < G__14704__a.length) {G__14704__a[G__14704__i] = arguments[G__14704__i + 0]; ++G__14704__i;}
  args = new cljs.core.IndexedSeq(G__14704__a,0,null);
} 
return G__14703__delegate.call(this,args);};
G__14703.cljs$lang$maxFixedArity = 0;
G__14703.cljs$lang$applyTo = (function (arglist__14705){
var args = cljs.core.seq(arglist__14705);
return G__14703__delegate(args);
});
G__14703.cljs$core$IFn$_invoke$arity$variadic = G__14703__delegate;
return G__14703;
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
