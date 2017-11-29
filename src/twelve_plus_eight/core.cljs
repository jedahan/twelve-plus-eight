(ns twelve-plus-eight.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  (q/smooth 2)
  (q/text-font "Menlo" 32)
  (q/no-stroke)
  ; setup function returns initial state.
  {:mx 0.5
   :my 0.5
   :max-lines 40
   :num-lines 11
   :num-points 60
   :thetas (range 0 (* 2 Math/PI) (/ Math/PI 60))
   :padding-ratio 0.1
  })

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  {:mx (/ (q/mouse-x) (q/width))
   :my (/ (q/mouse-y) (q/height))
   :max-lines (:max-lines state)
   :num-lines (min (q/floor (* (:max-lines state) (:mx state))) (:max-lines state))
   :num-points (:num-points state)
   :thetas (range 0 (* 2 Math/PI) (/ Math/PI (:num-points state)))
   :padding-ratio (min 0.49 (:my state))
  })

(defn sign [x]
  (cond
    (> x 0) 1
    (< x 0) -1
    :else 0
  )
)

(defn squircle [theta curvature]
  [
    (* (q/pow (q/abs (q/cos theta)) curvature) (sign (q/cos theta)))
    (* (q/pow (q/abs (q/sin theta)) curvature) (sign (q/sin theta)))
  ]
)

(defn draw-state [state]
  (q/background 220 220 120)
  (let [padding-amount (* (:padding-ratio state) (q/width))]
    (doseq [radius-ratio (range 0 1.01 (/ 1 (dec (:num-lines state))))]
      (let [radius (+ (* (q/width) radius-ratio (- 0.5 (* 2 (:padding-ratio state)))) padding-amount)
            coords (map (fn [theta] (squircle theta (- 1 radius-ratio))) (:thetas state))]
        ; Clear the sketch by filling it with light-grey color.
        ; where is the mouse?
        (q/stroke 0)
        (q/stroke-weight 2)
        ; Set circle color.
        ; Calculate x and y coordinates of the circle.
        ; Move origin point to the center of the sketch.
        (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
          (q/text "hello" -34 10)
          ; Draw the squarcle
            (doseq [[i coord] (map-indexed vector coords)]
              (let [[x1 y1] coord
                    [x2 y2] (nth coords (mod (+ i 1) (* 2 (:num-points state))))
                    [a b c d] (mapv (fn [x] (* x radius)) [x1 y1 x2 y2])]
                (q/line a b c d)))
        )

      )
    )
    )
)

(q/defsketch twelve-plus-eight
  :host "twelve-plus-eight"
  :size [900 900]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
