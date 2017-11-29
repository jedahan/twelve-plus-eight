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

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$thetas,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),((2) * Math.PI),(Math.PI / (60))),cljs.core.cst$kw$mx,0.5,cljs.core.cst$kw$my,0.5,cljs.core.cst$kw$num_DASH_lines,(11),cljs.core.cst$kw$padding_DASH_ratio,0.1,cljs.core.cst$kw$color,(0),cljs.core.cst$kw$angle,(0)], null);
});
twelve_plus_eight.core.update_state = (function twelve_plus_eight$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$thetas,cljs.core.cst$kw$thetas.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$color,cljs.core.mod((cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),cljs.core.cst$kw$mx,(quil.core.mouse_x() / quil.core.width()),cljs.core.cst$kw$my,(quil.core.mouse_y() / quil.core.height()),cljs.core.cst$kw$num_DASH_lines,quil.core.floor(((40) * cljs.core.cst$kw$mx.cljs$core$IFn$_invoke$arity$1(state))),cljs.core.cst$kw$padding_DASH_ratio,cljs.core.cst$kw$my.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$angle,(cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
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
twelve_plus_eight.core.half_pi = (Math.PI / (2));
twelve_plus_eight.core.quarter_pi = (Math.PI / (4));
twelve_plus_eight.core.square = (function twelve_plus_eight$core$square(theta){
var quadrant = (function (){var G__14525 = cljs.core.mod(((theta + twelve_plus_eight.core.quarter_pi) / twelve_plus_eight.core.half_pi),(4));
return Math.floor(G__14525);
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quadrant,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(quil.core.tan(theta) * (1))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quadrant,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) / quil.core.tan(theta)),(1)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quadrant,(2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (1)),(- (quil.core.tan(theta) * (1)))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quadrant,(3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- ((1) / quil.core.tan(theta))),(- (1))], null);
} else {
return null;
}
}
}
}
});
twelve_plus_eight.core.draw_state = (function twelve_plus_eight$core$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$3((220),(220),(120));

var padding_amount = (cljs.core.cst$kw$padding_DASH_ratio.cljs$core$IFn$_invoke$arity$1(state) * quil.core.width());
var seq__14526 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),1.01,((1) / (cljs.core.cst$kw$num_DASH_lines.cljs$core$IFn$_invoke$arity$1(state) - (1)))));
var chunk__14527 = null;
var count__14528 = (0);
var i__14529 = (0);
while(true){
if((i__14529 < count__14528)){
var radius_ratio = chunk__14527.cljs$core$IIndexed$_nth$arity$2(null,i__14529);
var radius_14586 = (((quil.core.width() * radius_ratio) * (0.5 - ((2) * cljs.core.cst$kw$padding_DASH_ratio.cljs$core$IFn$_invoke$arity$1(state)))) + padding_amount);
var coords_14587 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__14526,chunk__14527,count__14528,i__14529,radius_14586,radius_ratio,padding_amount){
return (function (theta){
return twelve_plus_eight.core.squircle(theta,((1) - radius_ratio));
});})(seq__14526,chunk__14527,count__14528,i__14529,radius_14586,radius_ratio,padding_amount))
,cljs.core.cst$kw$thetas.cljs$core$IFn$_invoke$arity$1(state));
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.stroke_weight((2));

var tr__14424__auto___14588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__14424__auto___14588);

quil.core.text.cljs$core$IFn$_invoke$arity$3("hello",(-34),(10));

var seq__14530_14589 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coords_14587));
var chunk__14531_14590 = null;
var count__14532_14591 = (0);
var i__14533_14592 = (0);
while(true){
if((i__14533_14592 < count__14532_14591)){
var vec__14534_14593 = chunk__14531_14590.cljs$core$IIndexed$_nth$arity$2(null,i__14533_14592);
var i_14594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14534_14593,(0),null);
var coord_14595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14534_14593,(1),null);
var vec__14537_14596 = coord_14595;
var x1_14597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14537_14596,(0),null);
var y1_14598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14537_14596,(1),null);
var vec__14540_14599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coords_14587,cljs.core.mod((i_14594 + (1)),(30)));
var x2_14600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14540_14599,(0),null);
var y2_14601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14540_14599,(1),null);
var vec__14543_14602 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__14530_14589,chunk__14531_14590,count__14532_14591,i__14533_14592,seq__14526,chunk__14527,count__14528,i__14529,vec__14537_14596,x1_14597,y1_14598,vec__14540_14599,x2_14600,y2_14601,vec__14534_14593,i_14594,coord_14595,tr__14424__auto___14588,radius_14586,coords_14587,radius_ratio,padding_amount){
return (function (x){
return (x * radius_14586);
});})(seq__14530_14589,chunk__14531_14590,count__14532_14591,i__14533_14592,seq__14526,chunk__14527,count__14528,i__14529,vec__14537_14596,x1_14597,y1_14598,vec__14540_14599,x2_14600,y2_14601,vec__14534_14593,i_14594,coord_14595,tr__14424__auto___14588,radius_14586,coords_14587,radius_ratio,padding_amount))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_14597,y1_14598,x2_14600,y2_14601], null));
var a_14603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14543_14602,(0),null);
var b_14604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14543_14602,(1),null);
var c_14605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14543_14602,(2),null);
var d_14606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14543_14602,(3),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(a_14603,b_14604,c_14605,d_14606);

var G__14607 = seq__14530_14589;
var G__14608 = chunk__14531_14590;
var G__14609 = count__14532_14591;
var G__14610 = (i__14533_14592 + (1));
seq__14530_14589 = G__14607;
chunk__14531_14590 = G__14608;
count__14532_14591 = G__14609;
i__14533_14592 = G__14610;
continue;
} else {
var temp__4657__auto___14611 = cljs.core.seq(seq__14530_14589);
if(temp__4657__auto___14611){
var seq__14530_14612__$1 = temp__4657__auto___14611;
if(cljs.core.chunked_seq_QMARK_(seq__14530_14612__$1)){
var c__8819__auto___14613 = cljs.core.chunk_first(seq__14530_14612__$1);
var G__14614 = cljs.core.chunk_rest(seq__14530_14612__$1);
var G__14615 = c__8819__auto___14613;
var G__14616 = cljs.core.count(c__8819__auto___14613);
var G__14617 = (0);
seq__14530_14589 = G__14614;
chunk__14531_14590 = G__14615;
count__14532_14591 = G__14616;
i__14533_14592 = G__14617;
continue;
} else {
var vec__14546_14618 = cljs.core.first(seq__14530_14612__$1);
var i_14619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14546_14618,(0),null);
var coord_14620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14546_14618,(1),null);
var vec__14549_14621 = coord_14620;
var x1_14622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14549_14621,(0),null);
var y1_14623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14549_14621,(1),null);
var vec__14552_14624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coords_14587,cljs.core.mod((i_14619 + (1)),(30)));
var x2_14625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14552_14624,(0),null);
var y2_14626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14552_14624,(1),null);
var vec__14555_14627 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__14530_14589,chunk__14531_14590,count__14532_14591,i__14533_14592,seq__14526,chunk__14527,count__14528,i__14529,vec__14549_14621,x1_14622,y1_14623,vec__14552_14624,x2_14625,y2_14626,vec__14546_14618,i_14619,coord_14620,seq__14530_14612__$1,temp__4657__auto___14611,tr__14424__auto___14588,radius_14586,coords_14587,radius_ratio,padding_amount){
return (function (x){
return (x * radius_14586);
});})(seq__14530_14589,chunk__14531_14590,count__14532_14591,i__14533_14592,seq__14526,chunk__14527,count__14528,i__14529,vec__14549_14621,x1_14622,y1_14623,vec__14552_14624,x2_14625,y2_14626,vec__14546_14618,i_14619,coord_14620,seq__14530_14612__$1,temp__4657__auto___14611,tr__14424__auto___14588,radius_14586,coords_14587,radius_ratio,padding_amount))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_14622,y1_14623,x2_14625,y2_14626], null));
var a_14628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14555_14627,(0),null);
var b_14629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14555_14627,(1),null);
var c_14630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14555_14627,(2),null);
var d_14631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14555_14627,(3),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(a_14628,b_14629,c_14630,d_14631);

var G__14632 = cljs.core.next(seq__14530_14612__$1);
var G__14633 = null;
var G__14634 = (0);
var G__14635 = (0);
seq__14530_14589 = G__14632;
chunk__14531_14590 = G__14633;
count__14532_14591 = G__14634;
i__14533_14592 = G__14635;
continue;
}
} else {
}
}
break;
}
}finally {quil.core.pop_matrix();
}
var G__14636 = seq__14526;
var G__14637 = chunk__14527;
var G__14638 = count__14528;
var G__14639 = (i__14529 + (1));
seq__14526 = G__14636;
chunk__14527 = G__14637;
count__14528 = G__14638;
i__14529 = G__14639;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14526);
if(temp__4657__auto__){
var seq__14526__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14526__$1)){
var c__8819__auto__ = cljs.core.chunk_first(seq__14526__$1);
var G__14640 = cljs.core.chunk_rest(seq__14526__$1);
var G__14641 = c__8819__auto__;
var G__14642 = cljs.core.count(c__8819__auto__);
var G__14643 = (0);
seq__14526 = G__14640;
chunk__14527 = G__14641;
count__14528 = G__14642;
i__14529 = G__14643;
continue;
} else {
var radius_ratio = cljs.core.first(seq__14526__$1);
var radius_14644 = (((quil.core.width() * radius_ratio) * (0.5 - ((2) * cljs.core.cst$kw$padding_DASH_ratio.cljs$core$IFn$_invoke$arity$1(state)))) + padding_amount);
var coords_14645 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__14526,chunk__14527,count__14528,i__14529,radius_14644,radius_ratio,seq__14526__$1,temp__4657__auto__,padding_amount){
return (function (theta){
return twelve_plus_eight.core.squircle(theta,((1) - radius_ratio));
});})(seq__14526,chunk__14527,count__14528,i__14529,radius_14644,radius_ratio,seq__14526__$1,temp__4657__auto__,padding_amount))
,cljs.core.cst$kw$thetas.cljs$core$IFn$_invoke$arity$1(state));
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((0));

quil.core.stroke_weight((2));

var tr__14424__auto___14646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__14424__auto___14646);

quil.core.text.cljs$core$IFn$_invoke$arity$3("hello",(-34),(10));

var seq__14558_14647 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coords_14645));
var chunk__14559_14648 = null;
var count__14560_14649 = (0);
var i__14561_14650 = (0);
while(true){
if((i__14561_14650 < count__14560_14649)){
var vec__14562_14651 = chunk__14559_14648.cljs$core$IIndexed$_nth$arity$2(null,i__14561_14650);
var i_14652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14562_14651,(0),null);
var coord_14653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14562_14651,(1),null);
var vec__14565_14654 = coord_14653;
var x1_14655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14565_14654,(0),null);
var y1_14656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14565_14654,(1),null);
var vec__14568_14657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coords_14645,cljs.core.mod((i_14652 + (1)),(30)));
var x2_14658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14568_14657,(0),null);
var y2_14659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14568_14657,(1),null);
var vec__14571_14660 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__14558_14647,chunk__14559_14648,count__14560_14649,i__14561_14650,seq__14526,chunk__14527,count__14528,i__14529,vec__14565_14654,x1_14655,y1_14656,vec__14568_14657,x2_14658,y2_14659,vec__14562_14651,i_14652,coord_14653,tr__14424__auto___14646,radius_14644,coords_14645,radius_ratio,seq__14526__$1,temp__4657__auto__,padding_amount){
return (function (x){
return (x * radius_14644);
});})(seq__14558_14647,chunk__14559_14648,count__14560_14649,i__14561_14650,seq__14526,chunk__14527,count__14528,i__14529,vec__14565_14654,x1_14655,y1_14656,vec__14568_14657,x2_14658,y2_14659,vec__14562_14651,i_14652,coord_14653,tr__14424__auto___14646,radius_14644,coords_14645,radius_ratio,seq__14526__$1,temp__4657__auto__,padding_amount))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_14655,y1_14656,x2_14658,y2_14659], null));
var a_14661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14571_14660,(0),null);
var b_14662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14571_14660,(1),null);
var c_14663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14571_14660,(2),null);
var d_14664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14571_14660,(3),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(a_14661,b_14662,c_14663,d_14664);

var G__14665 = seq__14558_14647;
var G__14666 = chunk__14559_14648;
var G__14667 = count__14560_14649;
var G__14668 = (i__14561_14650 + (1));
seq__14558_14647 = G__14665;
chunk__14559_14648 = G__14666;
count__14560_14649 = G__14667;
i__14561_14650 = G__14668;
continue;
} else {
var temp__4657__auto___14669__$1 = cljs.core.seq(seq__14558_14647);
if(temp__4657__auto___14669__$1){
var seq__14558_14670__$1 = temp__4657__auto___14669__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14558_14670__$1)){
var c__8819__auto___14671 = cljs.core.chunk_first(seq__14558_14670__$1);
var G__14672 = cljs.core.chunk_rest(seq__14558_14670__$1);
var G__14673 = c__8819__auto___14671;
var G__14674 = cljs.core.count(c__8819__auto___14671);
var G__14675 = (0);
seq__14558_14647 = G__14672;
chunk__14559_14648 = G__14673;
count__14560_14649 = G__14674;
i__14561_14650 = G__14675;
continue;
} else {
var vec__14574_14676 = cljs.core.first(seq__14558_14670__$1);
var i_14677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14574_14676,(0),null);
var coord_14678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14574_14676,(1),null);
var vec__14577_14679 = coord_14678;
var x1_14680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14577_14679,(0),null);
var y1_14681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14577_14679,(1),null);
var vec__14580_14682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coords_14645,cljs.core.mod((i_14677 + (1)),(30)));
var x2_14683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14580_14682,(0),null);
var y2_14684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14580_14682,(1),null);
var vec__14583_14685 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__14558_14647,chunk__14559_14648,count__14560_14649,i__14561_14650,seq__14526,chunk__14527,count__14528,i__14529,vec__14577_14679,x1_14680,y1_14681,vec__14580_14682,x2_14683,y2_14684,vec__14574_14676,i_14677,coord_14678,seq__14558_14670__$1,temp__4657__auto___14669__$1,tr__14424__auto___14646,radius_14644,coords_14645,radius_ratio,seq__14526__$1,temp__4657__auto__,padding_amount){
return (function (x){
return (x * radius_14644);
});})(seq__14558_14647,chunk__14559_14648,count__14560_14649,i__14561_14650,seq__14526,chunk__14527,count__14528,i__14529,vec__14577_14679,x1_14680,y1_14681,vec__14580_14682,x2_14683,y2_14684,vec__14574_14676,i_14677,coord_14678,seq__14558_14670__$1,temp__4657__auto___14669__$1,tr__14424__auto___14646,radius_14644,coords_14645,radius_ratio,seq__14526__$1,temp__4657__auto__,padding_amount))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_14680,y1_14681,x2_14683,y2_14684], null));
var a_14686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14583_14685,(0),null);
var b_14687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14583_14685,(1),null);
var c_14688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14583_14685,(2),null);
var d_14689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14583_14685,(3),null);
quil.core.line.cljs$core$IFn$_invoke$arity$4(a_14686,b_14687,c_14688,d_14689);

var G__14690 = cljs.core.next(seq__14558_14670__$1);
var G__14691 = null;
var G__14692 = (0);
var G__14693 = (0);
seq__14558_14647 = G__14690;
chunk__14559_14648 = G__14691;
count__14560_14649 = G__14692;
i__14561_14650 = G__14693;
continue;
}
} else {
}
}
break;
}
}finally {quil.core.pop_matrix();
}
var G__14694 = cljs.core.next(seq__14526__$1);
var G__14695 = null;
var G__14696 = (0);
var G__14697 = (0);
seq__14526 = G__14694;
chunk__14527 = G__14695;
count__14528 = G__14696;
i__14529 = G__14697;
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
var G__14698__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(twelve_plus_eight.core.update_state,args);
};
var G__14698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14699__i = 0, G__14699__a = new Array(arguments.length -  0);
while (G__14699__i < G__14699__a.length) {G__14699__a[G__14699__i] = arguments[G__14699__i + 0]; ++G__14699__i;}
  args = new cljs.core.IndexedSeq(G__14699__a,0,null);
} 
return G__14698__delegate.call(this,args);};
G__14698.cljs$lang$maxFixedArity = 0;
G__14698.cljs$lang$applyTo = (function (arglist__14700){
var args = cljs.core.seq(arglist__14700);
return G__14698__delegate(args);
});
G__14698.cljs$core$IFn$_invoke$arity$variadic = G__14698__delegate;
return G__14698;
})()
:twelve_plus_eight.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(900),(900)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(twelve_plus_eight.core.setup))?(function() { 
var G__14701__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(twelve_plus_eight.core.setup,args);
};
var G__14701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14702__i = 0, G__14702__a = new Array(arguments.length -  0);
while (G__14702__i < G__14702__a.length) {G__14702__a[G__14702__i] = arguments[G__14702__i + 0]; ++G__14702__i;}
  args = new cljs.core.IndexedSeq(G__14702__a,0,null);
} 
return G__14701__delegate.call(this,args);};
G__14701.cljs$lang$maxFixedArity = 0;
G__14701.cljs$lang$applyTo = (function (arglist__14703){
var args = cljs.core.seq(arglist__14703);
return G__14701__delegate(args);
});
G__14701.cljs$core$IFn$_invoke$arity$variadic = G__14701__delegate;
return G__14701;
})()
:twelve_plus_eight.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(twelve_plus_eight.core.draw_state))?(function() { 
var G__14704__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(twelve_plus_eight.core.draw_state,args);
};
var G__14704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14705__i = 0, G__14705__a = new Array(arguments.length -  0);
while (G__14705__i < G__14705__a.length) {G__14705__a[G__14705__i] = arguments[G__14705__i + 0]; ++G__14705__i;}
  args = new cljs.core.IndexedSeq(G__14705__a,0,null);
} 
return G__14704__delegate.call(this,args);};
G__14704.cljs$lang$maxFixedArity = 0;
G__14704.cljs$lang$applyTo = (function (arglist__14706){
var args = cljs.core.seq(arglist__14706);
return G__14704__delegate(args);
});
G__14704.cljs$core$IFn$_invoke$arity$variadic = G__14704__delegate;
return G__14704;
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
