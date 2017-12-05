(ns twelve-plus-eight.sketch
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 30)
  (q/no-stroke)
  (q/stroke-weight 2)
;  (q/smooth 8)
  {:max-lines 40
   :num-lines 11
   :num-points 60
   :thetas (range 0 (* 2 Math/PI) (/ Math/PI 60))
   :padding-ratio 0.1
  })

(defn sign [x]
  (cond
    (> x 0) 1
    (< x 0) -1
    :else 0
  )
)

(defn vmul [scalar v]
  (map #(* % scalar) v)
)

(defn squircle [theta curvature]
  [
     (* (q/pow (q/abs (q/cos theta)) curvature) (sign (q/cos theta)))
     (* (q/pow (q/abs (q/sin theta)) curvature) (sign (q/sin theta)))
  ]
)

(defn osc
  ([] (osc 1 0))
  ([speed] (osc speed 0))
  ([speed phase]
    (let [seconds (/ (q/millis) 1000)]
      (+ 0.5 (/ (q/sin (+ phase (* seconds speed))) 2))))
)

(defn line-coords [thetas radius-ratio my]
  (let [size (* (q/width) 0.4)
        curvature (osc (* 100 (q/pow my 2)) radius-ratio)]
    (map #(vmul (* radius-ratio size) (squircle % curvature)) thetas)
  )
)

(defn mouse-moved [state mouse]
  (let [mx (/ (:x mouse) (q/width))
        my (/ (:y mouse) (q/height))]
    (-> state (assoc :mx mx :my my))
  )
)

(defn update-state [state]
  (let [num-lines (q/floor (+ 5 (* (osc 1 0.5) (:max-lines state))))
        radii-ratios (map #(* % (/ 1 (dec num-lines))) (range 0 num-lines))
        lines-coords (map #(line-coords (:thetas state) % (:my state)) radii-ratios)]
    (-> state (assoc :lines-coords lines-coords))
  )
)

(defn line [x y xx yy]
  (q/line x y xx yy)
)

(defn draw-state [state]
  (q/background 220 220 120)
  (q/stroke 0)
  ;(q/scale [8])
  (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
    (doseq [line-coords (rest (:lines-coords state))]
      (doseq [[[x y] [xx yy]] (partition 2 1 line-coords)]
        (q/line x y xx yy)
      )
      (q/line (first (last line-coords))
              (last (last line-coords))
              (first (first line-coords))
              (last (first line-coords))
      )
    )
  )
)

(q/defsketch twelve-plus-eight
  :host "twelve-plus-eight"
  :size [900 900]
  :setup setup
  :update update-state
  :draw draw-state
  :mouse-moved mouse-moved
  :middleware [m/fun-mode])
