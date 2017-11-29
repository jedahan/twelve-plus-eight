(ns twelve-plus-eight.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  (q/text-font "Menlo" 32)
  (q/no-stroke)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:thetas (range 0 (* 2 Math/PI) (/ Math/PI 720))
   :mx 0.5
   :my 0.5
   :color 0
   :angle 0})

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  {:thetas (:thetas state)
   :color (mod (+ (:color state) 0.7) 255)
   :mx (/ (q/mouse-x) (q/width))
   :my (/ (q/mouse-y) (q/height))
   :angle (+ (:angle state) 0.1)})

(defn sign [x]
  (cond
    (> x 0) 1
    (< x 0) -1
    :else 0
  )
)

(defn circle [theta]
  [(q/cos theta) (q/sin theta)]
)

(defn squircle [theta]
  [
    (* (q/sqrt (q/abs (q/cos theta))) (sign (q/cos theta)))
    (* (q/sqrt (q/abs (q/sin theta))) (sign (q/sin theta)))
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


(defn mixed [from to theta amount]
  (let [[from-x from-y] (from theta)
        [to-x to-y] (to theta)]
      [(q/lerp from-x to-x amount)
       (q/lerp from-y to-y amount)
       ]
  )
)

(defn squarcle [theta circleness squareness]
  (let [[x1 y1] (mixed circle squircle theta (- 1 circleness))
        [x2 y2] (mixed squircle square theta squareness)]
       [(q/lerp x1 x2 0.9) (q/lerp y1 y2 (- 1 0.1))]
  )
)

(defn draw-state [state]
  (let [mx (:mx state)
        my (:my state)
        coords (map (fn [theta] (squarcle theta mx my)) (:thetas state))]
    ; Clear the sketch by filling it with light-grey color.
    (q/background 192)
    ; where is the mouse?
    (q/fill 0 0 100)
    ; Set circle color.
    (q/fill 64 200 100)
    ; Calculate x and y coordinates of the circle.
    ; Move origin point to the center of the sketch.
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      ; Draw the squarcle
      (doseq [radius (range 30 250 44)]
        (doseq [[x y] coords] (q/ellipse (* x radius) (* y radius) 15 15))
      )
    )

    (q/fill 100 100 255)
    (q/rect 0 (- (q/height) 40) (q/width) 40)
    (q/fill 0 0 100)
    (q/text (str mx " " my) 10 (- (q/height) 10))
  )
)

(q/defsketch twelve-plus-eight
  :host "twelve-plus-eight"
  :size [800 800]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
