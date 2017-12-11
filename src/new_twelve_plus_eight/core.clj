(ns new-twelve-plus-eight.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn gif [options]
  (let [; retrieve existing draw function or use empty one if not present
        draw (:draw options (fn []))
        frames (:frames options (* 30 4))
        sketch-name (:sketch-name options "sketch")
        ; updated-draw will replace draw
        updated-draw (fn []
                       (draw) ; call user-provided draw function
                       (let [loop-frame-count (+ 1 (* 2 Math/PI (q/target-frame-rate)))]
                         (if (< 1 (q/frame-count) loop-frame-count)
                           (q/save-frame (str sketch-name "-####.png")))))]
    ; set updated-draw as :draw function
    (assoc options :draw updated-draw)))

(defn setup []
  (q/frame-rate 30)
  {:max-lines 2
   :my 0.08
   :mx 0.5
   :resolution 30
   :padding (* 0.05 (q/width))
   :center [(/ (q/width) 2) (/ (q/height) 2)]})

(defn sign [x]
  (cond
    (> x 0) 1
    (< x 0) -1
    :else 0))

(defn squircle [radius curvature resolution]
  (let [angles (range 0 (* 2 Math/PI) (/ Math/PI resolution))]
    (map (fn [[x y]] [(* radius x) (* radius y)])
      (map (fn [angle]
            [(* (sign (q/cos angle)) (q/pow (q/abs (q/cos angle)) curvature))
             (* (sign (q/sin angle)) (q/pow (q/abs (q/sin angle)) curvature))])
          angles))))

(defn osc [& {:keys [frequency amplitude offset] :or {frequency 1, amplitude 1, offset 0}}]
   (let [t (/ (q/frame-count) (q/target-frame-rate))]
     (* amplitude (/ (+ 1 (q/sin (+ offset (* t frequency)))) 2))))

(defn mouse-moved [state mouse]
  (let [mx (/ (:x mouse) (q/width))
        my (/ (:y mouse) (q/height))]
    (-> state (assoc :mx mx :my my))))

(defn update-state [state]
  (let [ max-radius (* 0.3 (q/width))
         osc-x (+ 0.5 (osc :frequency (osc) :amplitude 0.5))
         osc-y (- (osc :amplitude (:mx state)) (:my state))
         num-lines (q/floor (+ 1 (* (:max-lines state) osc-x)))
         line-ratios (range 0 1 (/ 1 num-lines))
         padding (:padding state)
         resolution (:resolution state)
         make-squircle (fn [[radius-ratio curvature]] (squircle (+ padding (* max-radius radius-ratio)) (+ (:mx state) curvature) resolution))
         ;make-squircle #(squircle (+ padding (* %1 max-radius)) (- 1 %2) resolution)
         squircles (map make-squircle (map list line-ratios (cycle line-ratios)))]
         ;(map (partial * osc-y) line-ratios)))]
    (-> state (assoc :squircles squircles))))

(defn my-line [from to]
  (q/line from to))

(defn draw-state [state]
  (q/background 220 220 120)
  (q/with-translation [(:center state)]
    (doseq [from-squircle (:squircles state)]
;      (q/rotate (- (osc :frequency 1 :amplitude 0.15) 0.075))
      (let [to-squircle (concat (drop 1 from-squircle) (take 1 from-squircle))]
        (doseq [[from to] (map list from-squircle to-squircle)]
          (my-line from to))))))

(q/defsketch new-twelve-plus-eight
  :host "new-twelve-plus-eight"
  :size [600 600]
  :setup setup
  :update update-state
  :draw draw-state
  :mouse-moved mouse-moved
  :middleware [m/fun-mode])
