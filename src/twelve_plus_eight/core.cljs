(ns twelve-plus-eight.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn mouse-normalized []
  [
    (/ (q/mouse-x) (q/width))
    (/ (q/mouse-y) (q/height))
  ]
)

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  (q/text-font "Menlo" 32)
  (q/no-stroke)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :angle 0})

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (mod (+ (:color state) 0.7) 255)
   :angle (+ (:angle state) 0.01)})

(defn sign [x]
  (cond
    (> x 0) 1
    (< x 0) -1
    :else 0
  )
)

(defn circle [radius theta]
  [
    (* (q/abs (q/sin theta)) radius (sign (q/cos theta)))
    (* (q/abs (q/sin theta)) radius (sign (q/sin theta)))
  ]
)

(def half-pi (/ js/Math.PI 2))
(def quarter-pi (/ js/Math.PI 4))

(defn square [theta]
  (let [quadrant (js/Math.floor (mod (/ (+ theta quarter-pi) half-pi) 4))]
    (cond
        (= quadrant 0) [(+ 1) (* (q/tan theta) 1)]
        (= quadrant 1) [(/ 1 (q/tan theta)) (+ 1)]
        (= quadrant 2) [(- 1) (- (* (q/tan theta) 1))]
        (= quadrant 3) [(- (/ 1 (q/tan theta))) (- 1)]
    )
  )
)

;(defn squarcle-x [r t squareness]
;  (q/lerp (circle r t) (square r t) squareness)
;)

;(defn squarcle-y [r t squareness]
;  (q/lerp (circle-y r t) (square-y r t) squareness)
;)

(defn draw-state [state]
  (let [[mx my] (mouse-normalized)]
    ; Clear the sketch by filling it with light-grey color.
    ;(q/background (* 360 mx) 100 (* 100 my))
    ; where is the mouse?
    (q/fill 0 0 100)
    ;(q/text (str (mouse-normalized)) (/ (q/width) 2) (/ (q/height) 2))
    ; Set circle color.
    (q/fill (:color state) 255 255)
    ; Calculate x and y coordinates of the circle.
    (let [angle (:angle state)
         coords  (square angle)
         x (first coords)
         y (second coords)]
      ; Move origin point to the center of the sketch.
      (q/with-translation [(/ (q/width) 2)
                           (/ (q/height) 2)]
        ; Draw the circle.
        (q/ellipse (* x 50) (* y 50) 10 10))

      (q/fill 100 100 255)
      (q/rect 0 (- (q/height) 40) (q/width) 40)
      (q/fill 0 0 100)
      (q/text (str (q/floor x) " " (q/floor y)) 10 (- (q/height) 10))
    )
  )
)

(q/defsketch twelve-plus-eight
  :host "twelve-plus-eight"
  :size [500 500]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
