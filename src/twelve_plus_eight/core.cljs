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
  (if
    (> x 0) 1
    (if
      (< x 0) -1
      0
    )
  )
)

(defn squircle-x [r t]
  (* (q/sqrt (q/abs (q/cos t)))
     r
     (sign (q/cos t))
  )
)

(defn squircle-y [r t]
  (* (q/sqrt (q/abs (q/sin t)))
     r
     (sign (q/sin t))
  )
)


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
          x (squircle-x (* mx 360) angle)
          y (squircle-y (* my 360) angle)]
      ; Move origin point to the center of the sketch.
      (q/with-translation [(/ (q/width) 2)
                           (/ (q/height) 2)]
        ; Draw the circle.
        (q/ellipse x y 10 10)))
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
